import { useContext, useState } from "react";
import { EventContext } from "../contexts/eventContext";
import EntryCard from "./entryCard";
import EntryListHandler from "./entryListHandler";


const EntryList = ({event}) =>{
    const {events,setEvents} = useContext(EventContext);
    const [listOfEntries, setListOfEntries] = useState(event.entriesList)

    return(<>
        <EntryListHandler event = {event}/>
        <div>
            {listOfEntries.map((el) => (
                <EntryCard entry = {el} event = {event}/>
            ))}
        </div>
    </>)
}

export default EntryList;