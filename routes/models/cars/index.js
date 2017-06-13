const cars = require('express').Router({ mergeParams: true });
// mergeParams takes all the params that were passed to models (the parent sub-route) and passes it to cars route in models
const all = require('./all');

cars.get('/', all);


module.exports = cars;
