import { useContext, useState } from "react";
import { EventContext } from "../contexts/eventContext";
import EntryCard from "./entryCard";
import EntryListHandler from "./entryListHandler";


const EntryList = ({cardEvent,onUpdate}) =>{

    return(<>
        <EntryListHandler cardEvent = {cardEvent} onUpdate = {onUpdate}/>
        <div>
            {cardEvent.entriesList.map((el) => (
                <div key = {el._id}>
                <EntryCard entry = {el} cardEvent = {cardEvent} onUpdate = {onUpdate}/>
                </div>
            ))}
        </div>
    </>)
}

export default EntryList;