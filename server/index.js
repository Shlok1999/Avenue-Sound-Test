const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const User = require('./models/user.model')
const cors = require('cors')
app.use(cors())
app.use(express.json())
const bcrypt = require('bcryptjs')


const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/AvenueUser', () => {
    console.log("Connected")
})


app.get('/', (req, res) => {
    res.send("Hello")
})

// REGISTER PAGE
app.post('/api/register', async (req, res) => {
    // console.log(req.body)
    try {
        
        const password = req.body.password;
        const confirmPass = req.body.confirmPass;
        let hash = crypto.createHash('md5').update(password).digest('hex');
        if(password === confirmPass){
            // Create User
            const user = await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                confirmPass: req.body.confirmPass
            })
        }
        
    } catch(err) {
        res.json({ status: 'error', error: 'Duplicate Email' })
    }
})

// LOGIN PAGE

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })

    if(user){
        const token = jwt.sign(
        {
            name: user.firstName,
            email: user.email,
            
        }, 'secret')
        console.log(token)
        return res.json({status: 'ok', user: token})
    }else{
        return res.json({status: 'error', user: false})

    }
})


// const securePassword =async (password)=>{
//     const hashed = await bcrypt.hash(password, 10)
//     console.log(hashed)
// }

// securePassword('shlok@123')


app.listen(2020, () => {
    console.log(`http://localhost:2020`)
})