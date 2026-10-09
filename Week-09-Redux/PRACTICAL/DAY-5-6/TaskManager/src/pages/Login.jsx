import { login } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Login(){

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = (e)=>{
        e.preventDefault()
        console.log(email,password);

        if(!email || !password){
          setError('Please enter valid email and password')
          return;
        }

        dispatch(login({
            user:{
                name: email.split('@')[0],
                email: email
            },
            token: 'wxy345'
        }))
        setError('')
        navigate('/dashboard')
    }

    return(
        <form onSubmit={handleLogin}>            
          <input value={email} type="email" onChange={(e)=>setEmail(e.target.value)} noValidate/>
          <input value={password} type="password" onChange={(e)=>setPassword(e.target.value)}/>
          <button type="submit">Login</button>
          <p>{error}</p>
        </form>
    )
}


