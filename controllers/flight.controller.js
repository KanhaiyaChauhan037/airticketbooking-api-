
const Flight = require("../models/flight.models")

// Create a new flight
exports.createFlight = async (req, res) => {
  try {
    const flight = new Flight(req.body);
    const savedFlight = await flight.save();
    res.status(201).json(savedFlight);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

// Get all flights
exports.getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

// Get a flight by ID
exports.getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) {
      return res.status(404).send('Flight not found');
    }
    res.json(flight);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

// Update a flight by ID
exports.updateFlightById = async (req, res) => {
  try {
    const flight = await Flight.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!flight) {
      return res.status(404).send('Flight not found');
    }
    res.json(flight);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

// Delete a flight by ID
exports.deleteFlightById = async (req, res) => {
  try {
    const flight = await Flight.findByIdAndDelete(req.params.id);
    if (!flight) {
      return res.status(404).send('Flight not found');
    }
    res.json({ message: 'Flight deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};
