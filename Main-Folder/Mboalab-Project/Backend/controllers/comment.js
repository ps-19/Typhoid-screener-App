const Comment = require('../models/comment');

const addComment = (req, res) => {
    var { firstname, lastname, email, comment } = req.body;
    if(!firstname.length){
        firstname="Anonymous";
        lastname="User";
    }
    const newComment = new Comment({ firstname, lastname, email, comment });
    newComment.save().then(() => {
        console.log("Message saved successfully!");
        res.redirect("/comments");
        

    }).catch((error) => {
        console.log(error);
        res.redirect("/404");
        

    });
}


const getAllComments = (req, res) => {
    console.log(res);
    Comment.find({}).then((result) => {
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    });

}

module.exports = {
    addComment,
    getAllComments
}