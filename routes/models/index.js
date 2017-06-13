/* =====================================
    This is for getting models,
    and getting cars by model
===================================== */

const models = require('express').Router();

const all = require('./all');
const single = require('./single');
const cars = require('./cars');

models.get('/', all);
models.get('/:modelId', single);

models.use('/:modelId/cars', cars); // Need to use models.use because cars is a sub-router or the models sub-router

module.exports = models;
