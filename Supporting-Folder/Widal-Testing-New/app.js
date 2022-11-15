const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
// const multer = require('multer');
var fileupload = require("express-fileupload");
const fs = require('fs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const publicDirectoryPath = path.join(__dirname, './public');
app.use(express.static(publicDirectoryPath));
app.use(fileupload());

// To enable functionality of env variables
require('dotenv').config()
const DB = process.env.MONGO_URI


mongoose.connect(DB).then(() => {
    console.log("Successfully connected to Database.");
}).catch((database_error) => {
    console.log("There is some error in connection.");
    console.log(database_error);
})

const storeImage = require('./model/storeImage');

// var upload = multer({ dest: 'uploads/' });

app.get('/', (req, res) => {
    res.render(index.html);
})

app.post('/', (req, res) => {
    res.send("Post operation has been called!");
})

app.post('/load', (req,res)=>{
    console.log(req.body);
    // console.log(req.body);
    // console.log(req.body.image.path);
    // const firstname = req.body.firstname;
    // const lastname = req.body.lastname;
    // const email = req.body.email;
    // const description = req.body.desciption;
    // const image = fs.readFileSync(req.body.image);
    // const newParam = new storeImage({ firstname, lastname, email, description, image });
    // newParam.save().then(() => {
    //     console.log("Save in database successfully!!");
    // }).catch((error) => {
    //     console.log("Something wrong happened!!");
    //     console.log(error);
    // });
    // var obj = {
    //     firstname: req.body.firstname,
    //     lastname: req.body.lastname,
    //     email: req.body.email,
    //     description: req.body.description,
    //     image: {
    //         data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
    //         contentType: 'image/png'
    //     }
    // }
    // storeImage.create(obj, (err, item) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         // item.save();
    //         res.redirect('/');
    //     }
    // });
    var isSuffering = Algorithm_to_classify(req.image);
    if(isSuffering == true){
        res.send("You are suffering from Thypoid");
    }
    else{
        res.send("You are suffering from not Thypoid");
    }
    res.send("Post successfully");
})
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Server is running on !'+PORT);
})
