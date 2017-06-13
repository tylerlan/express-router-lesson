/* =====================================
		This is for getting cars
===================================== */

const cars = require('express').Router(); // This is a new instance of the Router() class

// This gives us access to:
// get(),
// post(),
// update(),
/// all(), and
// delete()

const all = require('./all');
const single = require('./single');

cars.get('/', all);
cars.get('/:carId', single)







module.exports = cars;
