
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import './login.css'

export default function Login(){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('')

    const navigate = useNavigate()

    const handleLogin =(e)=>{
        e.preventDefault()

        if(email ==='shahanas@gmail.com' && password === '12345'){
            localStorage.setItem('login','true')
            setError('')
            navigate('/dashboard')
        } else{
            setEmail('')
            setPassword('')
            setError('Invalid Email or Password')
        }
        
    }

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Enter an email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <br/>
                <br/>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <br/>
                <button type="submit">Login</button>
                {error && <p className="errorText">{error}</p>}
            </form>
        </div>
    )
}