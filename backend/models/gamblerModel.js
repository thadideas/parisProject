import mongoose from "mongoose"

const GamblerSchema = new mongoose.Schema({
    gamblerName: String,
    thadBucks: Number,
    //Some login related items here, add soon
    activeFlames: Number

})

const Gambler = mongoose.model("Gambler",GamblerSchema)
export default Gambler

