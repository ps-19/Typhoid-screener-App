const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const RegisterSchema = new mongoose.Schema({
    firstname: {
        type: String,
        default: ''
        // required: true
    },
    lastname: {
        type: String,
        default: ''
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    password: {
        type: String,
        // required: true
    }

})

RegisterSchema.pre('save', function(next){
    var user = this;
    //only hash the password if it has been modified or if it is new
    if(!user.isModified('password')) return next();

    //generate a salt
    bcryptjs.genSalt(10, function(err, salt){
        if(err) return next(err);
        // hash the password using our new salt
        bcryptjs.hash(user.password, salt, function(err, hash){
            if(err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        })
    })
})


const Register = mongoose.model('register', RegisterSchema);
module.exports = Register;