import mongoose from "mongoose"

const EventSchema = new mongoose.Schema({
    eventID: Number,
    discipline: String,
    eventName: String,
    betCloseTime: Date,
    resultsTime: Date,

    entriesList: [],
    betStatus: Number,
    totalBetsOnEvent: Number,
    totalFlamesOnEvent: Number,
    thadBuckMapEvent: {
        type: Map,
    },
    flamesMapEvent:{
        type: Map,
    }


    
})

const Event = mongoose.model("Event",EventSchema)
export default Event