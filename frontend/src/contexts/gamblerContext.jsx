import { createContext, useState } from "react";

export const GamblerContext = createContext()

const GamblerProvider = ({children}) => {
    const [ gambler, setGambler] = useState({
        email: localStorage.getItem('email')
    })

    return (
        <GamblerContext.Provider value={{gambler, setGambler}}>
            {children}
        </GamblerContext.Provider>
    )
}

export default GamblerProvider