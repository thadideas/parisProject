import { useState } from "react";
import { EventContext } from "../contexts/eventContext";
import EntryCard from "./entryCard";
import EntryListHandler from "./entryListHandler";


const EntryList = (event) =>{
    const [listOfEntries, setListOfEntries] = useState(event.event.entriesList)

    return(<>
        <EntryListHandler event ={event}/>
        <div>
            {listOfEntries.map((el) => (
                <EntryCard entry = {el}/>
            ))}
        </div>
    </>)
}

export default EntryList;