const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type : String,
    },
    password: {
        type : String,
    },
    email: {
        type : String,
        unique : true
    },
    role : {
        type: String,
        enum: ['Admin', 'User'],
        default: 'user'
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User