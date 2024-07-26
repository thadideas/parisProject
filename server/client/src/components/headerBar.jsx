import { Link } from "react-router-dom"
import logo from "../assets/images/logostandin.png"
import profileIcon from "../assets/images/profilestandin.png"
import { useContext } from "react"
import { GamblerContext } from "../contexts/gamblerContext"

const HeaderBar = () => {
    const {gambler, setGambler} = useContext(GamblerContext)
    return (
        <>
            <div className="h-16 w-full bg-summerair fixed z-10">
                <Link to = "/"><img src={logo} className="m-2 absolute"/></Link>
                <h1 className = "h-16 absolute right-20 text-white">{gambler.thadBucks} Th</h1>
                <Link className = "h-16 w-16 absolute right-0" to = "/landing">
                    <img src={profileIcon} className="m-2 absolute right-0"/>
                </Link>
                
            </div>
        </>
    )
}

export default HeaderBar;