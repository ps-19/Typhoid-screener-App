const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    
});

const imageInfo = mongoose.model("images", imageSchema);

module.exports = imageInfo;