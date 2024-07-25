import { useState } from "react";

const Signup = () =>{
    const [error, setError] = useState(null);
    const [email,setEmail] = useState('');
    const [gamblername,setGamblername] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const handleSignup = (e) =>{
        e.preventDefault();
        

    }
    return(<>
            <div className = "bg-sand w-full h-full absolute">
            <div className = "mt-16 absolute w-full">
                <h2 className = "text-center text-white font-bold m-2">Sign up for a new account</h2>
                <h2 className = "text-center text-white font-bold m-2 text-sm">You can change your 'Gambler Name' later</h2>
                <form>
                    <input
                        type = "email"
                        placeholder = "Email Address"
                        className = "block my-2 mx-auto h-8 w-64 rounded-full p-3"
                        onChange={(e) => setEmail(e.target.value)}
                        value = {email}
                        autoFocus/>
                    <input
                        type = "gamblername"
                        placeholder = "Gambler Name"
                        className = "block my-2 mx-auto h-8 w-64 rounded-full p-3"
                        value = {gamblername}
                        onChange={(e) => setGamblername(e.target.value)}/>
                    <input
                        type = "password"
                        placeholder = "Password"
                        className = "block my-2 mx-auto h-8 w-64 rounded-full p-3"
                        value = {password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <input
                        type = "confirmpassword"
                        placeholder = "Confirm Password"
                        className = "block my-2 mx-auto h-8 w-64 rounded-full p-3"
                        value = {confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <button className = "block my-2 mx-auto h-8 w-32 rounded-full bg-summerair text-white">Sign Up</button>
                    {error?<p>{error}</p>:<></>}
                </form>
            </div>
        </div>
    </>)
}

export default Signup;