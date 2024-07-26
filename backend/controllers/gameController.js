import Gambler from "../models/gamblerModel.js"
import Event from "../models/eventModel.js"
import Entry from "../models/entryModel.js"


const placeBet = async (req, res) =>{
    const eventBetPlacedIn = await Event.findById(req.body.entry.event.event._id)
    if(eventBetPlacedIn.betStatus > 0){
        return res.status(400).json({error: "Betting Closed"})
    }

    const bettingGambler = await Gambler.findOne({email:req.body.gambler.email})
    const entryBetPlacedIn = await Entry.findById(req.body.entry.entry._id)

    console.log(entryBetPlacedIn)

    // 2nd bet free handling
    if (eventBetPlacedIn.thadBuckMapEvent.get(bettingGambler._id) !== 1){
        bettingGambler.thadBucks --
    }

    // Update entry maps
    if (entryBetPlacedIn.thadBuckMapEntry.get(bettingGambler._id)){
        entryBetPlacedIn.thadBuckMapEntry.set(bettingGambler._id,Number(entryBetPlacedIn.thadBuckMapEntry.get(bettingGambler._id))+1)
        entryBetPlacedIn.flamesMapEntry.set(bettingGambler._id,Number(entryBetPlacedIn.flamesMapEntry.get(bettingGambler._id))+Number(entryBetPlacedIn.flamesPerBet))
    }else{
        entryBetPlacedIn.thadBuckMapEntry.set(bettingGambler._id,1)
        entryBetPlacedIn.flamesMapEntry.set(bettingGambler._id,Number(entryBetPlacedIn.flamesPerBet))
    }

    // Update event maps
    if (eventBetPlacedIn.thadBuckMapEvent.get(bettingGambler._id)){
        eventBetPlacedIn.thadBuckMapEvent.set(bettingGambler._id,Number(eventBetPlacedIn.thadBuckMapEvent.get(bettingGambler._id))+1)
        eventBetPlacedIn.flamesMapEvent.set(bettingGambler._id,Number(eventBetPlacedIn.flamesMapEvent.get(bettingGambler._id))+Number(entryBetPlacedIn.flamesPerBet))
    }else{
        eventBetPlacedIn.thadBuckMapEvent.set(bettingGambler._id,1)
        eventBetPlacedIn.flamesMapEvent.set(bettingGambler._id,Number(entryBetPlacedIn.flamesPerBet))
    }

    entryBetPlacedIn.countBets ++
    eventBetPlacedIn.totalBetsOnEvent ++
    eventBetPlacedIn.totalFlamesOnEvent += entryBetPlacedIn.flamesPerBet

    await entryBetPlacedIn.save()

    const defaultFlames = Math.max((eventBetPlacedIn.totalBetsOnEvent+3)/7,1)
    for (const entry in eventBetPlacedIn.entriesList){
        const foundEntry = await Entry.findById(eventBetPlacedIn.entriesList[entry]._id)
        if (foundEntry.countBets == 0){
            foundEntry.flamesPerBet = defaultFlames
        }else{
            foundEntry.flamesPerBet = (eventBetPlacedIn.totalBetsOnEvent+1)/(7*foundEntry.countBets)
        }
        await foundEntry.save()
    }

    await eventBetPlacedIn.save()
    await bettingGambler.save()
    

    console.log(eventBetPlacedIn)
    //console.log(entryBetPlacedIn)
    res.status(200).json({msg:'Post Request'})

    //console.log(req.body)
}

export {placeBet}