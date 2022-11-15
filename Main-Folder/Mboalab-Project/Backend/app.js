const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors());
// To enable functionality of env variables
require('dotenv').config()

const port = process.env.PORT || 5000;

// Auth Route required
const authRoute = require('./routes/auth.route');

require('./utils/extend-node-input-validator');
// Express use starts
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const publicDirectoryPath = path.join(__dirname, './public');
app.use(express.static(publicDirectoryPath));
// use ends

const DB = process.env.MONGO_URI

// Schema Required
const UserMessage = require('./model/userMessage');
const SurveyInfo = require('./model/SurveyInfo');
const Comment = require('./model/Comment');
const Func = require('./Prediction/predict');
const Register = require('./model/Register');
// Schema

mongoose.connect(DB).then(() => {
    console.log("Successfully connected to Database.");
}).catch((database_error) => {
    console.log("There is some error in connection.");
    console.log(database_error);
})

app.get('/', (req, res) => {
    res.render(index.html);
})

app.post('/', (req, res) => {
    res.send("Post operation has been called!");
})

app.delete('/', (req, res) => {
    res.send("Delete operation has been called!");
})

app.put('/', (req, res) => {
    res.send("Put operation has been called!");
})

app.get('/contact', (req, res) => {
    res.send('Get operation has been called on contact route.');
})

app.post('/contact', (req, res) => {
    res.redirect("/contact");
    const name = req.body.yourname;
    const email = req.body.youremail;
    const phone = req.body.yourphone;
    const subject = req.body.yoursubject;
    const message = req.body.yourmessage;
    const newParam = new UserMessage({ name, email, phone, subject, message });
    newParam.save().then(() => {
        console.log("Save in database successfully!!");
    }).catch((error) => {
        console.log("Something wrong happened!!");
        console.log(error);
    });
})

app.post('/service', (req, res) => {
    console.log(req.body);
    const { firstname, lastname, email, location, dayvisited, age, Fever, Abdominal_pain, Cough, Diarrheoa, Constipation, Rose_spots, Muscle_weakness, Anorexia, Headache, Skin_Rash, Weightless, Stomach_distention, Malaise, Occult_blood_in_stool, Haemorrahages, Derilium, Abdominal_rigidity, Epistaxis, Loss_of_appetite, Temperature, comment } = req.body;
    const newParam = new SurveyInfo({ firstname, lastname, email, location, dayvisited, age, Fever, Abdominal_pain, Cough, Diarrheoa, Constipation, Rose_spots, Muscle_weakness, Anorexia, Headache, Skin_Rash, Weightless, Stomach_distention, Malaise, Occult_blood_in_stool, Haemorrahages, Derilium, Abdominal_rigidity, Epistaxis, Loss_of_appetite, Temperature, comment });
    newParam.save().then(() => {
        console.log("Checkup Data has been saved successfully!");
        console.log(req.body);

        const result = Func(age, Fever, Abdominal_pain, Cough, Diarrheoa, Constipation, Rose_spots, Muscle_weakness, Anorexia, Headache, Skin_Rash, Weightless, Stomach_distention, Malaise, Occult_blood_in_stool, Haemorrahages, Derilium, Abdominal_rigidity, Epistaxis, Loss_of_appetite, Temperature);
        console.log(result);
        res.send(result);

    }).catch((error) => {
        console.log("Some error occured in data saving!");
        console.log(error);
        res.redirect("/");
    });
})

app.post('/comments', (req, res) => {
    var { firstname, lastname, email, comment } = req.body;
    if(!firstname.length){
        firstname="Anonymous";
        lastname="User";
    }
    const newComment = new Comment({ firstname, lastname, email, comment });
    newComment.save().then(() => {
        console.log("Message saved successfully!");
        // res.redirect("/comments");
        res.status(200).send({
            message: "Comment saved"
        })
    }).catch((error) => {
        console.log(error);
        res.redirect("/404");
    });
})
app.get('/allcomments', (req, res) => {
    
    console.log(res);
    Comment.find({}).then((result) => {
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    });

})


app.use('/auth', authRoute);

// TO show registered users
app.get('/allUsers', (req, res)=> {
    console.log(res);
    Register.find({}).then((result) => {
        res.send(result);
    })
    
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
})
