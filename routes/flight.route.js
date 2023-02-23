const express = require('express');
const flightController = require('../controllers/flight.controller');

const router = express.Router();

router.post('/', flightController.createFlight);
router.get('/', flightController.getAllFlights);
router.get('/:id', flightController.getFlightById);
router.put('/:id', flightController.updateFlightById);
router.delete('/:id', flightController.deleteFlightById);

module.exports = router;
