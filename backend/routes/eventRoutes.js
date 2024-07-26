import express from 'express'
import Event from '../models/eventModel.js';
import { getEvents, getEntry } from '../controllers/eventsController.js';
import Entry from '../models/entryModel.js';

const router = express.Router()

router.get('/', getEvents);

router.get('/getEntry',getEntry);

router.post('/addevent',async (req,res)=>{
    console.log("FUNCTION CALLED")
    console.log(req.body)
    const eventID = req.body.eventID;
    const eventName = req.body.eventName;
    const discipline = req.body.discipline;
    const betStatus = 0;
    const betCloseTime = Date.parse(req.body.betCloseTime);
    const resultsTime = Date.parse(req.body.resultsTime);
    const entries = [];
    const totalBetsOnEvent = 0;
    const totalFlamesOnEvent = 0;
    const thadBuckMapEvent = {}
    const flamesMapEvent = {}

    const newEvent = new Event({eventID, eventName, discipline, betStatus, betCloseTime, resultsTime, entries, totalBetsOnEvent, totalFlamesOnEvent, thadBuckMapEvent, flamesMapEvent})
    await newEvent.save()

    res.status(200).json({msg: 'Post Request'})
})

router.post('/addEntry', async(req,res)=>{
    const eventQuery = {eventID:req.body.event.eventID}
    const eventDocument = await Event.findOne(eventQuery)

    const entryName = req.body.name
    const countryCode =req.body.country.toUpperCase()
    const countBets = 0
    const thadBuckMapEntry = {}
    const flamesMapEntry = {}
    const flamesPerBet = Math.max((eventDocument.totalBetsOnEvent+3)/7,1)
    const place = 0

    const newEntry = new Entry({entryName,countryCode,countBets,thadBuckMapEntry,flamesMapEntry,flamesPerBet,place})
    await newEntry.save()

    //console.log(eventDocument.entriesList)
    eventDocument.entriesList.push(newEntry)
    await eventDocument.save()

    res.status(200).json({msg:'Post Request'})
})


export {router as eventRoutes}