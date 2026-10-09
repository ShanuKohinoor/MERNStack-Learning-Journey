import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../features/auth/authSlice"

export default function Login() {
  const dispatch = useDispatch()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleLogin = () => {
    dispatch(
      login({
        user: {
          name,
          email
        },
        token: "1234"
      })
    )
  }

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  )
}