const models = require('express').Router();

const all = require('./all');
const single = require('./single');

models.get('/', all);
cars.get('/:modelId', single)


module.exports = models;
