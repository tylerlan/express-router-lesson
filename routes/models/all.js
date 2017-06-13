const data = require('../../data.json');

module.exports = (req, res) => {
  // const models = data.models;
  const { models } = data;

  res.status(200).json({ models });
};
