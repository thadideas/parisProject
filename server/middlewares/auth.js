import jwt from 'jsonwebtoken'
import Gambler from '../models/gamblerModel.js'
import "dotenv/config.js";

const auth = async (req, res, next) =>{
    const {authorization} = req.headers;

    if(!authorization){
        return res.status(401).json({error: "Authorization token not found"})
    }

    const token = authorization.split(" ")[1]

    try{
        const {_id} = jwt.verify(token,process.env.SECRET)
        req.gambler = await Gambler.findById(_id).select("_id")
        
        next()
    }catch(error){
        res.status(401).json({error: error.message});
    }
}

export default auth