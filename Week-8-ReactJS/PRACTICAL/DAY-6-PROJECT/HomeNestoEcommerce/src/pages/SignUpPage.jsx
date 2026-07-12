import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignUp = (e) => {
     e.preventDefault();

    const userInputEmail = email.trim().toLowerCase();

    if (!userInputEmail || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userInputEmail)) {
      setError("Enter Valid email");
      return;
    }

    const passwordPattern = /^[0-9]{6}$/;
    if (!passwordPattern.test(password)) {
      setError("Password must be 6 digits only");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    const existingUser = users.find(
      (user) => user.email.toLowerCase() === userInputEmail
    );

    if (existingUser) {
      setError("User already exists");
      return;
    }

    users.push({
      email: userInputEmail,
      password
    });

    localStorage.setItem("users", JSON.stringify(users));
    setError('');
    navigate("/login");
  };

  return (
    <div className="signupContainer">
      <div className="signupBox">

        <h1>Create Account</h1>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password (6 digits)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button onClick={handleSignUp} className="signupBtn">
          Sign Up
        </button>

        {error && <p className="error">{error}</p>}

      </div>
    </div>
  );
}