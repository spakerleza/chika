const mongoose = require('mongoose')
const validator = require('validator')





const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    }, 
    mobile_no: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },createdAt:{
        type: Date, 
        default: Date.now}
})

module.exports =  User