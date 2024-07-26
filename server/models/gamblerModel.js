import mongoose from "mongoose"

const GamblerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    gamblerName: String,
    thadBucks: Number,
    rings: []

})

const Gambler = mongoose.model("Gambler",GamblerSchema)
export default Gambler

