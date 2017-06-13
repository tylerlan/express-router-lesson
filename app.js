// Bring in our dependencies
const app = require('express')();
const cars = require('./routes/cars');
const models = require('./routes/models');

app.use('/cars', cars)
app.use('/models', cars)

app.get('/', (req, res) => {
	res.status(200).json( { message: 'Connected!'} )
});


// Turn on that server!
app.listen(3000, () => {
	console.log('App listening on port 3000');
});

// http GET localhost:3000
