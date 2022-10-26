const express = require("express")
const router = express.Router();

const {

 addUserMessage

} = require('../controllers/userMessage')

router.route("/contact").post(addUserMessage)

module.exports = router