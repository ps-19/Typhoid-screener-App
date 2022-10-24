const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// Express use starts
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const publicDirectoryPath = path.join(__dirname, "./public");
app.use(express.static(publicDirectoryPath));
// use ends

const DB =
  "mongodb+srv://admin:12345@cluster0.ljfwx8r.mongodb.net/Mboalab-Database?retryWrites=true&w=majority";

// Schema Required
const UserMessage = require("./model/userMessage");
const SurveyInfo = require("./model/SurveyInfo");
const Comment = require("./model/Comment");
const Func = require("./Prediction/predict");
// Schema

mongoose
  .connect(DB)
  .then(() => {
    console.log("Successfully connected to Database.");
  })
  .catch((database_error) => {
    console.log("There is some error in connection.");
    console.log(database_error);
  });

app.get("/", (req, res) => {
  res.render(index.html);
});

app.post("/", (req, res) => {
  res.send("Post operation has been called!");
});

app.delete("/", (req, res) => {
  res.send("Delete operation has been called!");
});

app.put("/", (req, res) => {
  res.send("Put operation has been called!");
});

app.get("/contact", (req, res) => {
  res.send("Get operation has been called on contact route.");
});

app.post("/contact", (req, res) => {
  res.redirect("/contact");
  const name = req.body.yourname;
  const email = req.body.youremail;
  const phone = req.body.yourphone;
  const subject = req.body.yoursubject;
  const message = req.body.yourmessage;
  const newParam = new UserMessage({ name, email, phone, subject, message });
  newParam
    .save()
    .then(() => {
      console.log("Save in database successfully!!");
    })
    .catch((error) => {
      console.log("Something wrong happened!!");
      console.log(error);
    });
});

app.post("/online-checkup", (req, res) => {
  console.log(req.body);
  //   const {
  //     firstname,
  //     lastname,
  //     email,
  //     location,
  //     dayvisited,
  //     age,
  //     Fever,
  //     Abdominal_pain,
  //     Cough,
  //     Diarrheoa,
  //     Constipation,
  //     Rose_spots,
  //     Muscle_weakness,
  //     Anorexia,
  //     Headache,
  //     Skin_Rash,
  //     Weightless,
  //     Stomach_distention,
  //     Malaise,
  //     Occult_blood_in_stool,
  //     Haemorrahages,
  //     Derilium,
  //     Abdominal_rigidity,
  //     Epistaxis,
  //     Loss_of_appetite,
  //     Temperature,
  //     comment,
  //   } = req.body;
  //   const newParam = new SurveyInfo({
  //     firstname,
  //     lastname,
  //     email,
  //     location,
  //     dayvisited,
  //     age,
  //     Fever,
  //     Abdominal_pain,
  //     Cough,
  //     Diarrheoa,
  //     Constipation,
  //     Rose_spots,
  //     Muscle_weakness,
  //     Anorexia,
  //     Headache,
  //     Skin_Rash,
  //     Weightless,
  //     Stomach_distention,
  //     Malaise,
  //     Occult_blood_in_stool,
  //     Haemorrahages,
  //     Derilium,
  //     Abdominal_rigidity,
  //     Epistaxis,
  //     Loss_of_appetite,
  //     Temperature,
  //     comment,
  //   });
  //   newParam
  //     .save()
  //     .then(() => {
  //       console.log("Checkup Data has been saved successfully!");
  //       console.log(req.body);

  //       const result = Func(
  //         age,
  //         Fever,
  //         Abdominal_pain,
  //         Cough,
  //         Diarrheoa,
  //         Constipation,
  //         Rose_spots,
  //         Muscle_weakness,
  //         Anorexia,
  //         Headache,
  //         Skin_Rash,
  //         Weightless,
  //         Stomach_distention,
  //         Malaise,
  //         Occult_blood_in_stool,
  //         Haemorrahages,
  //         Derilium,
  //         Abdominal_rigidity,
  //         Epistaxis,
  //         Loss_of_appetite,
  //         Temperature
  //       );
  //       console.log(result);
  //       res.send(result);
  //     })
  //     .catch((error) => {
  //       console.log("Some error occured in data saving!");
  //       console.log(error);
  //       res.redirect("/");
  //     });
  res.end();
});

app.post("/comments", (req, res) => {
  var { firstname, lastname, email, comment } = req.body;
  if (!firstname.length) {
    firstname = "Anonymous";
    lastname = "User";
  }
  const newComment = new Comment({ firstname, lastname, email, comment });
  newComment
    .save()
    .then(() => {
      console.log("Message saved successfully!");
      res.redirect("/comments");
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/404");
    });
});
app.get("/allcomments", (req, res) => {
  console.log(res);
  Comment.find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(5000, () => {
  console.log("Server is running on 5000!");
});
