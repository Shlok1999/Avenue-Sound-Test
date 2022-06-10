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
        
        // const password = req.body.password;
        // const confirmPass = req.body.confirmPass;
            // Create User
            const newPassword = await bcrypt.hash(req.body.password, 10)
            const user = await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: newPassword,
                confirmPass: req.body.confirmPass
            }) 
                     
        res.json({status: 'ok'})  
        
    } catch(err) {
        res.json({ status: 'error', error: 'Duplicate Email' })
    }
})

// LOGIN PAGE

app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})
app.get('/api/home', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const user = await User.findOne({ email: email })

		return res.json({ status: 'ok', quote: user.quote })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})





app.listen(2020, () => {
    console.log(`http://localhost:2020`)
})