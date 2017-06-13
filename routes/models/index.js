const models = require('express').Router();
const all = require('./all.js');

models.get('/', all);

module.exports = models;
