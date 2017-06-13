const data = require('../../data.json');

module.exports = (req, res) => {
  // const cars = data.cars;
  const { cars } = data;

  res.status(200).json({ cars })
}
