import { useState } from "react";
import { addEventFront } from "../controllers/addEventController";

const AddEvent = () =>{

    const [error, setError] = useState(null);
    const [formText, setFormText] = useState("");


    const addEventAction = async (e) =>{
        console.log(formText);
        try{
            await addEventFront(formText)
        }catch(error){
            setError(error.message)
        }
    }


    return(<>
        <div className="bg-green absolute mt-16 w-full">
            <form onSubmit={addEventAction}>
            <p>EventDisclipline</p>
            <input
                type="text"
                name="EventText"
                value = {formText}
                onChange = {(e) => setFormText(e.target.value)}
            />
            <button className = "bg-gold">Add Event</button>
            </form>
        </div>
    </>)
}

export default AddEvent;