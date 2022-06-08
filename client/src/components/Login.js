import React, { useState } from 'react'
import Registration from './Registration';
import './Login.css'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const loginUser = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:2020/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password
            })
        })

        const data = await response.json();
        if(data.user){
            alert("Login Successful")
            window.location.href="/"
        }else{
            alert("Invalid Credentials")
        }

        setEmail("")
        setPassword("")
    }

    return (
        <div className="login-form">
            <h1>Login Form</h1>
            <form onSubmit = {loginUser}>
                <input placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" required /><br />
                <input placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" required /><br /> <br />
                <input type="submit" value="Login"/>
            </form>

        </div>
    )
}

export default Login