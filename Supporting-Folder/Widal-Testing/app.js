var express = require('express')
var app = express()
var multer = require('multer')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')


var fs = require('fs');
var path = require('path');



var imgModel = require('./model');


const DB = "mongodb+srv://admin:12345@cluster0.ljfwx8r.mongodb.net/WidalTestData?retryWrites=true&w=majority"

mongoose.connect(DB).then(() => {
    console.log("Successfully connected to Database.");
}).catch((database_error) => {
    console.log("There is some error in connection.");
    console.log(database_error);
})

var imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
module.exports = new mongoose.model('Image', imageSchema);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set("view engine", "ejs");

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads')
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now())
	}
});

var upload = multer({ storage: storage });

app.get('/', (req, res) => {
	imgModel.find({}, (err, items) => {
		if (err) {
			console.log(err);
			res.status(500).send('An error occurred', err);
		}
		else {
			res.render('index', { items: items });
		}
	});
});

app.post('/', upload.single('image'), (req, res, next) => {

	var obj = {
		name: req.body.name,
		desc: req.body.desc,
		img: {
			data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
			contentType: 'image/png'
		}
	}
	imgModel.create(obj, (err, item) => {
		if (err) {
			console.log(err);
		}
		else {
			res.redirect('/');
		}
	});
});

var port = process.env.PORT || 3000;
app.listen(port, err => {
	if (err)
		throw err
	console.log('Server listening on port', port)
})

