import { createContext, useState } from "react";

export const EventContext = createContext()

const EventProvider = ({children}) => {
    const [ events, setEvents] = useState([])

    return (
        <EventContext.Provider value={{events, setEvents}}>
            {children}
        </EventContext.Provider>
    )
}

export default EventProvider