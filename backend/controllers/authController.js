import Gambler from "../models/gamblerModel.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import "dotenv/config.js";

const createToken = (_id) =>{
    return jwt.sign({_id},process.env.SECRET, {expiresIn: "14d"})
};

const registerUser = async (req, res) =>{
    const {email, gamblerName, password} = req.body
    const initialThadBucks = 300
    const rings = []

    if (!email || !password || !gamblerName){
        return res.status(400).json({error: "All Fields Required"})
    }

    const exist = await Gambler.findOne({email})
    if (exist){
        return res.status(400).json({error: "Email Already Exists"})
    }

    const salt = await bcrypt.genSalt()
    const hashed = await bcrypt.hash(password,salt)

    try{
        const gambler = await Gambler.create({email, password:hashed, gamblerName, thadBucks:initialThadBucks, rings});
        const token = createToken(gambler._id)
        const thadBucks = initialThadBucks
        res.status(200).json({email, token, thadBucks})
    } catch (error){
        res.status(500).json({email})
    }
}

const loginUser = async (req, res) =>{
    console.log(req.body)

    const {email, password} = req.body
    if (!email || !password){
        return res.status(400).json({error: "All Fields Required"})
    }

    const gambler = await Gambler.findOne({email})
    if (!gambler){
        return res.status(400).json({error: "Email Not Found"})
    }

    const match = await bcrypt.compare(password, gambler.password)
    if (!match){
        return res.status(400).json({error: "Incorrect password"})
    }

    try{
        const token = createToken(gambler._id)
        const thadBucks = gambler.thadBucks
        
        res.status(200).json({email, token, thadBucks})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

export {registerUser,loginUser};