import mongoose from "mongoose"

const EntrySchema = new mongoose.Schema({
    //eventID: String,
    entryName: String,
    countryCode: String,
    countBets: Number,
    thadBuckMapEntry: {
        type: Map,
        of: String
    },
    flamesMapEntry:{
        type: Map,
        of: String
    },
    flamesPerBet: Number,
    place: Number,
    
})

const Entry = mongoose.model("Entry", EntrySchema)
export default Entry; EntrySchema