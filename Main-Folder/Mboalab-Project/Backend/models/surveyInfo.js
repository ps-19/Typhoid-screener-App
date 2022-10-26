const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    location: {
        type: String
    },
    dayvisited: {
        type: Date
    },
    age: {
        type: String
    },
    Fever: {
        type: String,
        required: true
    },
    Abdominal_pain: {
        type: String,
        required: true
    },
    Cough: {
        type: String,
        required: true
    },
    Diarrheoa: {
        type: String,
        required: true
    },
    Constipation: {
        type: String,
        required: true
    },
    Rose_spots: {
        type: String,
        required: true
    },
    Muscle_weakness: {
        type: String,
        required: true
    },
    Anorexia: {
        type: String,
        required: true
    },
    Headache: {
        type: String,
        required: true
    },
    Skin_Rash: {
        type: String,
        required: true
    },
    Weightless: {
        type: String,
        required: true
    },
    Stomach_distention: {
        type: String,
        required: true
    },
    Malaise: {
        type: String,
        required: true
    },
    Occult_blood_in_stool: {
        type: String,
        required: true
    },
    Haemorrahages: {
        type: String,
        required: true
    },
    Derilium: {
        type: String,
        required: true
    },
    Abdominal_rigidity: {
        type: String,
        required: true
    },
    Epistaxis: {
        type: String,
        required: true
    },
    Loss_of_appetite: {
        type: String,
        required: true
    },
    Temperature: {
        type: String,
        required: true
    },
    comment: {
        type: String
    }
});

const SurveyInfo = mongoose.model("checkups", surveySchema);

module.exports = SurveyInfo;