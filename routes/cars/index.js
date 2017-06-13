const cars = require('express').Router(); // This is a new instance of the Router() class

// This gives us access to:
// get(),
// post(),
// update(),
/// all(), and
// delete()

const all = require('./all.js');

cars.get('/', all);








module.exports = cars;
