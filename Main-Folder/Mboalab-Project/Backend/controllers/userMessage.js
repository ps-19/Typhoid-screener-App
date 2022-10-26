const UserMessage = require('../models/userMessage');

const addUserMessage = (req, res) => {
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
}

module.exports = {
    addUserMessage
}