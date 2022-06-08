import React, {useState} from 'react'

function Registration() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")

    

  return (
    <>
    <div><h1>Registration</h1></div>
    <form>
        <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" name="firstName" id="firstName" required /> <br />
        <input value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" name="lastName" id="lastName" required /><br />
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" required /><br />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" required /><br />
        <input value={confirmPass} onChange={(e)=>setConfirmPass(e.target.value)} type="password" name="confirmPass" id="confirmPass" required /> <br />
        <input type="submit" value="Register" />
    </form>


    </>
  )
}

export default Registration