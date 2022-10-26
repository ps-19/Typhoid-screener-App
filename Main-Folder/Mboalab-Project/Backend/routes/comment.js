const express = require("express")
const router = express.Router();

const {
    addComment,
    getAllComments

} = require('../controllers/comment')

router.route("/comments").post(addComment)
router.route("/allcomments").get(getAllComments)

module.exports = router