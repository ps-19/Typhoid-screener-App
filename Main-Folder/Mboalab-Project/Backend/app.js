const express = require('express');
const connectDB = require('./DB/connect');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const commentRoute = require('./routes/comment');
const surveyRoute = require('./routes/surveyInfo');
const messageRoute = require('./routes/userMessage');
const path = require('path');


const app = express();

// Express use starts
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const publicDirectoryPath = path.join(__dirname, './public');
app.use(express.static(publicDirectoryPath));

app.use('/', commentRoute, surveyRoute, messageRoute);


// use ends


app.get('/', (req, res) => {
    res.render(index.html);
})

app.post('/', (req, res) => {
    res.send("Post operation has been called!");
})

app.delete('/', (req, res) => {
    res.send("Delete operation has been called!");
})

app.put('/', (req, res) => {
    res.send("Put operation has been called!");
})

app.get('/contact', (req, res) => {
    res.send('Get operation has been called on contact route.');
})


const port = process.env.PORT || 5000;
const start = async () => {
	await connectDB(process.env.MONGO_URI);

	app.listen(port, () => {
		console.log(`Server is listening on port ${port}...`);
	});
};


start();