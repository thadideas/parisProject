import { useContext, useEffect, useState } from "react";
import EventCard from "../components/eventCard";
import EventListHandler from "../components/eventListHandler";
import { getEvents } from "../controllers/getEventsController";
import { EventContext } from "../contexts/eventContext";

const EventList = () =>{
    const {events,setEvents} = useContext(EventContext);
    const [filter,setFilter] = useState(0)

    useEffect(()=>{
        setTimeout( async () => {
            const eventData = await getEvents() 
            setEvents(eventData.events.sort((a, b) => a.eventID - b.eventID))
        }, 5000)
    },[])

    return(<>
        <div className="bg-sand absolute mt-16 w-full">
            <EventListHandler filter = {filter} setFilter = {setFilter}/>
            <div className = "static">
                {events && events.map((event) => (
                    <div key={event._id}>
                        <EventCard event = {event} filter = {filter}/>
                    </div>
                ))}
            </div>
        </div>
        


    </>)
}

export default EventList;