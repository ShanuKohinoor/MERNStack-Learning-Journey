import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";



export default function Login(){

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const handleLogin = async()=>{
    //     try{
    //       const res = await axios.post('http://localhost:5000/login',{
    //         email,
    //         password
    //       });

    //       const data = res.data;

    //       dispatch(login(data))

    //       localStorage.setItem('token',data.token)

    //       navigate('/dashboard')

    //     }catch(error){
    //        console.log(error);
           
    //     }
    // }


const handleLogin = () => {

    if (email === "anu@gmail.com" && password === "12345") {

        const demoData = {
            token: "anu123",
            user: {
                name: "Anu",
                email: email
            }
        };

        dispatch(login(demoData));
        localStorage.setItem("token", demoData.token);
        navigate("/dashboard");

    } else {
        setError("Invalid Email or Password");
    }
};

    return(
        <>
           <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
           <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
           <button onClick={handleLogin}>Login</button>
           <p>{error}</p>
        </>

    )
}