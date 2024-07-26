import Event from "../models/eventModel.js"
import Entry from "../models/entryModel.js"

const getEvents = async (req, res) => {
    try {
        const events = await Event.find()
        res.status(200).json({events})
    } catch (error){
        res.status(500).json({error: error.message})
    }
}

const getEntry = async (req, res) => {
    try {
        const entry = await Entry.findById(req.body)
        res.status(200).json({entry})
    } catch (error){
        res.status(500).json({error: error.message})
    }
}



export {getEvents, getEntry}