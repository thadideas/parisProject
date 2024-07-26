import { Link } from "react-router-dom"
const Landing = () =>{

    return(<>
        <div className = "bg-sand w-full h-full absolute">
            <div className = "mt-16 absolute w-full">
                <h1 className = "text-center text-white text-xl font-bold">Welcome to the Summertime Thadbucks Challenge!</h1>
                <h2 className = "text-center text-white font-bold">Log in or sign up to play!</h2>
                <button className = "block text-center text-white bg-summerair align-middle w-32 h-8 my-4 mx-auto rounded-full"><Link to = "/signup">Sign Up</Link></button>
                <button className = "block text-center text-white bg-summerair align-middle w-32 h-8 my-4 mx-auto rounded-full"><Link to = "/login">Log In</Link></button>
            </div>
        </div>
        
        
    </>)
}

export default Landing;