
import { useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import './Login.css'
import { FaShippingFast } from "react-icons/fa"

export default function Login(){
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   const [error,setError] = useState('')


   const {login} = useContext(AuthContext)
   const navigate = useNavigate()


   const handleLogin=(e)=>{
     e.preventDefault()

     const userInputEmail = email.trim().toLowerCase()

       // Check empty fields
        if(!userInputEmail  || !password ){
        setError('All fields are required ')
        return
        }

    // Check email pattern    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(userInputEmail)){
        setError('Enter a valid Email')
        return
    }


    const users = JSON.parse(localStorage.getItem('users') || '[]')

    const existingUser = users.find((user)=>user.email.toLowerCase() === userInputEmail)

      if(!existingUser){
        setError('User not found. Please Sign Up first')
        return
      }
    


      if(existingUser.password !== password){
        setError('Incorrect password')
        return
      }

     setError('')
     login(userInputEmail)
     navigate('/')


    }

    return(
        <div className="loginContainer">
            <div className="loginBox">
                <h1>Login/Register</h1>

                <p className="subText">
                <FaShippingFast className="shipIcon" />
                Free Shipping on First Order
                </p>        

                <input type="email" placeholder="Enter your email Id" value={email}
                    onChange={(e)=>{setEmail(e.target.value) 
                    setError('')}}
                />
                    
                <input type="password" placeholder="Enter a password" value={password}
                    onChange={(e)=>{setPassword(e.target.value)
                    setError('') }}
                />

                <button onClick={handleLogin} className="loginBtn">Login</button>

                {error && <p className="error">{error}</p>}
                <p className="signUpText">New Customer?</p>
                <button onClick={()=> navigate('/signUp')} className="signUpBtn">SignUp</button>

            </div>
        </div>
    )
}