const {Validator} = require('node-input-validator');
const register = require('../model/Register');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken')
const fs = require('fs')

exports.register = async (req, res) => {
    const v = new Validator(req.body, {
        firstname: 'required|minLength:2|maxLength:100',
        lastname: 'required|minLength:2|maxLength:100',
        email: 'required|email|unique:register,email',
        password: 'required'
    });
    const matched = await v.check();
    if(!matched){
        return res.status(422).send(v.errors);
    }
    try{
        console.log(req.body)
        const newUser = new register({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
    })

    let userData = await newUser.save();
    return res.status(200).send({
        message: 'Registration Sucessful',
        data: userData
    })
}catch(error){
    return res.status(400).send({
        message: error.message,
        data: error
    })
}         
  
}



exports.login = async (req, res) => {
    const v = new Validator(req.body, {
        email: 'required|email',
        password: 'required'
    });
    const matched = await v.check();
    if(!matched){
        return res.status(422).send(v.errors);
    }
    try{
        let userData = await register.findOne({email:req.body.email})
        if(userData){
            if(bcryptjs.compareSync(req.body.password, userData.password)){
                let jwt_secret = process.env.JWT_SECRET||'mysecret';
                let token = jwt.sign({
                    data: userData
                }, jwt_secret, {expiresIn: '12h'})

                return res.status(200).redirect("https://typhoid-image-model-backend.herokuapp.com/")
                // Could have used this for the data
                // return res.status(200).send({
                //     message: "Login sucessful",
                //     data: userData,
                //     token: token
                // })
            }else{
                return res.status(400).send({
                    message: "Incorrect credentials",
                    data: {}
                })
            }
        }else{
            return res.status(400).send({
                message: "User is not registered",
                data: {}
            })
        }
    }catch(error){
        return res.status(400).send({
            message: error.message,
            data: error
        })
    }
}