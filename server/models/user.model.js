const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 3},
    confirmPass: {type: String, required: true}
},{
    collection: 'user-data'
})

User.pre("create", async function (next){
    if(this.isModified("password")){
        const passHash = await bcrypt.hash(password, 10);
        this.password = await bcrypt.hash(this.password, 10)
        console.log(this.password)
    }
    next();

    
})

const model =  mongoose.model('UserData', User)

module.exports = model
