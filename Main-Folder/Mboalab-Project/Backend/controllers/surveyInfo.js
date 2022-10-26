const SurveyInfo = require('../models/surveyInfo');
const Func = require('../Prediction/predict');


const addCheckupData = (req, res) => {
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
}


module.exports = {
    addCheckupData
}