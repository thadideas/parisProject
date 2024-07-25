import { Link } from "react-router-dom"
import logo from "../assets/images/logostandin.png"
import profileIcon from "../assets/images/profilestandin.png"

const HeaderBar = () => {
    return (
        <>
            <div className="h-16 w-full bg-summerair fixed z-10">
                <img src={logo} className="m-2 absolute"/>
                <Link className = "h-16 w-16 absolute right-16" to = "/">
                    <img src={profileIcon} className="m-2 absolute right-0"/>
                </Link>
                <Link className = "h-16 w-16 absolute right-0" to = "/rings">
                    <img src={profileIcon} className="m-2 absolute right-0"/>
                </Link>
                
            </div>
        </>
    )
}

export default HeaderBar;