const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    confirmPass: {type: String, required: true}
},{
    collection: 'user-data'
})

const model =  mongoose.model('UserData', User)

module.exports = model
