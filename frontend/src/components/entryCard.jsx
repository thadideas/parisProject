import { useContext, useEffect, useState } from "react";
import { GamblerContext } from "../contexts/gamblerContext";
import { EventContext } from "../contexts/eventContext";
import convertimage from "../assets/images/convertimage.png"
import { newBet } from "../controllers/newBetController";
import { getEntry } from "../../../backend/controllers/eventsController";


const convertButtonText = "0.0"

const EntryCard = ({entryID,event}) =>{
    const {events, setEvents} = useContext(EventContext)
    const {gambler, setGambler} = useContext(GamblerContext)
    const [entry, setEntry] = useState(null)



    const flagSource = "src/assets/images/flags/"+entry.entry.countryCode+".svg"

    const replaceImage = (error) => {
        error.target.src = "src/assets/images/flags/EOR.svg";
    }

    const placeBet = async() => {
        const data = await newBet(gambler,entry)
    }

    return(<>
        <div className="h-12 w-auto relative">
            <img src = {flagSource} onError={replaceImage} className="w-10 mx-1 absolute top-1/2 -translate-y-1/2 block object-left"/>
            <div className="h-8 my-2 ml-12 mr-44 absolute">
                <h1 className = "text-sm text-wrap">{entry.entry.entryName}</h1>
            </div>

            <button className="bg-summerair h-8 w-32 my-2 rounded-full absolute right-12 hover:bg-blue" onClick = {placeBet}>
                <img src = {convertimage} className="h-8 absolute top-0"/>
                <h1 className="text-white text-left ml-16">{entry.entry.flamesPerBet.toFixed(2)}</h1>
            </button>

            <div className = "m-2 h-8 w-8 bg-red absolute right-0 rounded-lg">
                <h1 className="text-white text-center">{convertButtonText}</h1>
            </div>
        </div>
    </>)
};

export default EntryCard;