const data = require('../../../data.json');

module.exports = (req, res) => {
  const cars = data.cars;
  const modelId = req.params.modelId * 1;

  const car_of_model = data.cars.filter( car => car.modelId === modelId);

  res.status(200).json({ car_of_model });
};

// http://localhost:3000/models/2/cars
