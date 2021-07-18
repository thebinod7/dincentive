const express = require('express');
const config = require('config');

const PORT = config.get('app.port') || 5005;
const routeManager = require('./routes');

const app = express();

app.use(express.json());
app.use(routeManager);

app.listen(PORT, () => {
	console.log(`Server running at:`, PORT);
});
