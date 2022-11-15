const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String
        // required: true
    },
    email: {
        type: String
        // required: true
    },
    phone: {
        type: Number
        // required: true
    },
    subject: {
        type: String
        // required: true
    },
    message: {
        type: String
        // required: true
    }
})

const User = mongoose.model("messages", userSchema);

module.exports = User;