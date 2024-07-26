import { useContext, useEffect, useState } from "react";
import { GamblerContext } from "../contexts/gamblerContext";
import { EventContext } from "../contexts/eventContext";
import convertimage from "../assets/images/convertimage.png"
import { newBet } from "../controllers/newBetController";

const EntryCard = ({entry,cardEvent,onUpdate}) =>{
    const {events, setEvents} = useContext(EventContext)
    const {gambler, setGambler} = useContext(GamblerContext)

    const [flames,setFlames] = useState(entry.flamesMapEntry?entry.flamesMapEntry[gambler._id]?entry.flamesMapEntry[gambler._id]:0:0)

    const flagSource = "/flags/"+entry.countryCode+".svg"

    const replaceImage = (error) => {
        error.target.src = "/flags/EOR.svg";
    }

    const placeBet = async() => {
        const data = await newBet(gambler,entry,cardEvent)
        localStorage.setItem("thadBucks", data);
        setGambler({...gambler, thadBucks:data})
        onUpdate()
        console.log(entry.flamesMapEntry)
        console.log(gambler._id)

        if (entry.flamesMapEntry[gambler._id]){
            setFlames(entry.flamesMapEntry[gambler._id])
            console.log(entry.flamesMapEntry[gambler._id])
        }
    }

    
    return(<>
        <div className="h-12 w-auto relative">
            <img src = {flagSource} onError={replaceImage} className="w-10 mx-1 absolute top-1/2 -translate-y-1/2 block object-left"/>
            <div className="h-8 my-2 ml-12 mr-44 absolute">
                <h1 className = "text-sm text-wrap">{entry.entryName}</h1>
            </div>

            <button className="bg-summerair h-8 w-32 my-2 rounded-full absolute right-12 hover:bg-blue" onClick = {placeBet}>
                <img src = {convertimage} className="h-8 absolute top-0"/>
                <h1 className="text-white text-left ml-16">{entry.flamesPerBet.toFixed(2)}</h1>
            </button>

            <div className = "m-2 h-8 w-8 bg-red absolute right-0 rounded-lg">
                <h1 className="text-white text-center text-sm">{flames.toFixed(1)}</h1>
            </div>
        </div>
    </>)
};

export default EntryCard;