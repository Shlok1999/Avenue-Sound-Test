const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const User = require('./models/user.model')
const cors = require('cors')
app.use(cors())
app.use(express.json())

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/AvenueUser', () => {
    console.log("Connected")
})

app.get('/', (req, res) => {
    res.send("Hello")
})
app.post('/api/register', async (req, res) => {
    // console.log(req.body)
    try {
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            confirmPass: req.body.confirmPass
        })
        res.json({ status: 'ok' })
    } catch(err) {
        res.json({ status: 'error', error: 'Duplicate Email' })
    }
})

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



app.listen(2020, () => {
    console.log(`http://localhost:2020`)
})