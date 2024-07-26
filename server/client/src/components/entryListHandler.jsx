import { useContext, useEffect, useState } from "react";
import defaultFlag from "/flags/EOR.svg"
import { addEntryFront } from "../controllers/addEntryController";
import { EventContext } from "../contexts/eventContext";
import { getEvents } from "../controllers/getEventsController";


const EntryListHandler = ({cardEvent,onUpdate}) => {
    const {events, setEvents} = useContext(EventContext)
    const [error, setError] = useState(null);
    const [flagName, setFlagName] = useState("");
    const [entryName, setEntryName] = useState("");
    const [imageSource, setImageSource] = useState("/flags/EOR.svg")
    const flagEdit = (value) =>{
        setFlagName(value)
        setImageSource("/flags/"+value.toUpperCase()+".svg")
    }

    const replaceImage = (error) => {
        error.target.src = defaultFlag;
    }

    const addEntryAction = async (e) =>{
        try{
            await addEntryFront(cardEvent,flagName,entryName)
            onUpdate()
        }catch{
            setError(error.message)
        }
        
    }

    return(<>
        <div className = "h-12 relative">
            <img src = {imageSource} onError={replaceImage} className = "w-10 mx-1 top-1/2 -translate-y-1/2 block object-left absolute"/>
            <input
                type = "text"
                name = "flagText"
                value = {flagName}
                onChange = {(e) => flagEdit(e.target.value)}
                maxLength = {3}
                className = "ml-14 my-2 mr-2 h-8 w-12 uppercase rounded-lg text-center"
            />
            <input
                type = "text"
                name = "entryText"
                value = {entryName}
                onChange = {(e) => setEntryName(e.target.value)}
                placeholder= "Entry Name"
                className = "my-2 h-8 rounded-lg text-sm"
            />
            <button className = "bg-gold w-14 h-8 rounded-lg m-2 text-xs" onClick = {addEntryAction}>Add Entry</button>

        </div>
    </>)
}

export default EntryListHandler;