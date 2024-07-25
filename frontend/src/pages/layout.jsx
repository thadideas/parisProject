import { Link, Outlet } from "react-router-dom"
import HeaderBar from "../components/headerBar"
import EventList from "./eventList"
import RingsList from "./ringsList"



const Layout = () => {
    return (<>
        <header>
            <HeaderBar/>
        </header>
        <main>
            <Outlet/>
        </main>
    </>)
}
//<Link to = "/" className ="text-4xl font-bold">Homepage</Link>
export default Layout