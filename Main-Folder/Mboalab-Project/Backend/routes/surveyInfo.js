const express = require("express")
const router = express.Router();


const {

 addCheckupData

} = require('../controllers/surveyInfo')

router.route("/service").post(addCheckupData)

module.exports = router