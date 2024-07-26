import { useContext, useState } from "react";
import { loginUser } from "../controllers/gamblersController";
import { GamblerContext } from "../contexts/gamblerContext";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const {gambler, setGambler} = useContext(GamblerContext)
    const navigate = useNavigate()

    const [error, setError] = useState(null);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')

    const handleLogin = async (e) =>{
        e.preventDefault();

        try{
            const data = await loginUser(email, password)
            setGambler({email, thadBucks:data.thadBucks})
            navigate('/')
        }catch(error){
            setError(error.message)
        }

    }

    return(<>
        <div className = "bg-sand w-full h-full absolute">
            <div className = "mt-16 absolute w-full">
                <h2 className = "text-center text-white font-bold m-2">Log in to your account</h2>
                <form onSubmit = {handleLogin}>
                    <input
                        type = "email"
                        placeholder = "Email Address"
                        className = "block my-2 mx-auto h-8 w-64 rounded-full p-3"
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoFocus/>
                    <input
                        type = "password"
                        placeholder = "Password"
                        className = "block my-2 mx-auto h-8 w-64 rounded-full p-3"
                        value = {password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <button className = "block my-2 mx-auto h-8 w-32 rounded-full bg-summerair text-white">Log In</button>
                    {error?<p>{error}</p>:<></>}
                </form>
            </div>
        </div>
    </>)
}

export default Login;