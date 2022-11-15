const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: {
        type: String
        // required: true
    },
    lastname: {
        type: String
        // required: true
    },
    email: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: Buffer,
        required: true
    }
})

const User = mongoose.model("images", userSchema);

module.exports = User;