import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Registration.css'

function Registration() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    

    const registerUser = async (e) => {
        e.preventDefault();
        if(password === confirmPass){
            const response = await fetch('http://localhost:2020/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName, lastName, email, password, confirmPass
                })
            })
    
            const data = await response.json();
        }else{
            alert("Passwords do not match")
        }
        

        setConfirmPass("")
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
    }



    return (
        <>
        <div className="regd-form">
        <h1 style={{color: 'black'}}>Registration</h1>
        <div></div>
            <form onSubmit={registerUser}>
                <input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" name="firstName" id="firstName" required  /> <br />
                <input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" name="lastName" id="lastName" required /><br />
                <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" required /><br />
                <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" required /><br />
                <input placeholder="Confirm Password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} type="password" name="confirmPass" id="confirmPass" required /> <br /> <br />
                <input className="regd-btn" type="submit" value="Register" /> <br /> <br />
               <p style={{color: 'black'}}>Already Registered?</p>  <a style={{color: 'black', fontSize: 18, padding: 3, border: '1px solid black', borderRadius: '10%', backgroundColor: 'white'}} href="/">Go to login</a>
            </form>
        </div>
            


        </>
    )
}

export default Registration