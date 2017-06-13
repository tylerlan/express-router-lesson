// Bring in our dependencies
const app = require('express')();
const models = require('./routes/models');
const cars = require('./routes/cars');

//  Connect all our routes to our application

app.use('/cars', cars);
app.use('/models', models);

app.get('/', (req, res) => {
	res.status(200).json({ message: 'Connected!' });
});

// Turn on that server!
app.listen(3000, () => {
	console.log('App listening on port 3000');
});