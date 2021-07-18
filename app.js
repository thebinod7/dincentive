const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const PORT = config.get('app.port') || 5005;
const DB_URL = config.get('app.db_url');

const routeManager = require('./routes');

const app = express();

mongoose.connect(DB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
});
mongoose.connection.on('connected', function () {
	console.log('Connected to database successfully.');
});
mongoose.connection.on('error', function (err) {
	console.log('Database error:' + ' ' + err);
});

app.use(express.json());
app.use(routeManager);

app.listen(PORT, () => {
	console.log(`Server running at:`, PORT);
});
