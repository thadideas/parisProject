import mongoose from "mongoose"
import Gambler from "./gamblerModel"

const RingSchema = new mongoose.Schema({
    ringName: String,
    ringHash: String,
    members: [Gambler]
})

const Ring = mongoose.model("Ring",RingSchema)
export default Ring