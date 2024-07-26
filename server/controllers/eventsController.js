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

const getSingleEvent = async (req, res) => {
    console.log(req.body)
    try {
        const event = await Event.findById(req.body._id)
        if (!event){
            return res.status(400).json({ error: "Event not found" });
        }
        res.status(200).json({event})
    } catch (error){
        res.status(500).json({error: error.message})
    }
}



export {getEvents, getSingleEvent}