import { useState } from "react"
import EntryList from "./entryList"

const EventCard = ({event}) => {
    const [cardEvent,setCardEvent] = useState(event)
    const [active, setActive] = useState(false);
    const pictogramSrc = "src/assets/images/pictograms/" + cardEvent.discipline + ".svg"
    let nextTime
    let timeText

    if(cardEvent.betStatus == 0){
        nextTime = new Date(cardEvent.betCloseTime)
        nextTime.setDate(nextTime.getDate()-1)
        timeText = "Betting closes on "
    }else if(cardEvent.betStatus == 1){
        nextTime = new Date(cardEvent.resultsTime)
        timeText = "Results released at "
    }

    let hours = nextTime.getHours()-1
    let half = "AM"
    if(hours > 12){
        hours = hours - 12
        half = "PM"
    }

    const displayTime = timeText+(nextTime.getMonth()+1)+"/"+(nextTime.getDate()+1)+" at "+ hours + half

    return(<>
        <div className ={active?"bg-white/60 m-2 h-auto w-auto rounded-lg relative":"m-2 h-12 w-auto rounded-lg relative"}>
            <div className="bg-white/60 h-12 w-auto rounded-lg relative" onClick={()=>setActive(!active)}>
                <img src = {pictogramSrc} className="w-10 h-10 m-1 absolute"/>
                <div className="h-12 ml-14 absolute">
                    <h1>{cardEvent.discipline}</h1>
                    <h2 className="text-xs">{cardEvent.eventName}</h2>
                </div>

                <div className="h-12 absolute right-32 m-1">
                    <h1 className="text-sm">1</h1>
                    <h1 className="text-sm">2</h1>
                </div>

                <div className="absolute right-0 w-24 h-10 m-1">
                    <h1 className="text-xs text-wrap">{displayTime}</h1>
                </div>
            </div>
            {active?<EntryList event = {cardEvent}/>:<></>}
        </div>
    </>)
}

export default EventCard;