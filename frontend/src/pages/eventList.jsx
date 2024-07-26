import { useContext, useEffect } from "react";
import EventCard from "../components/eventCard";
import EventListHandler from "../components/eventListHandler";
import { getEvents } from "../controllers/getEventsController";
import { EventContext } from "../contexts/eventContext";

const EventList = () =>{
    const {events,setEvents} = useContext(EventContext);

    useEffect(()=>{
        setTimeout( async () => {
            const eventData = await getEvents() 
            setEvents(eventData.events)
        }, 5000)
    },[])

    return(<>
        <div className="bg-sand absolute mt-16 w-full">
            <EventListHandler/>
            <div className = "static">
                {events && events.map((event) => (
                    <div key={event._id}>
                        <EventCard event = {event}/>
                    </div>
                ))}
            </div>
        </div>
        


    </>)
}

export default EventList;