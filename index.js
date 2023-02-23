const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require("./routes/user.route");
const flightRoutes = require("./routes/flight.route");

const url = "mongodb+srv://kch:kch@mock-15.utcr2qa.mongodb.net/?retryWrites=true&w=majority"

const app = express();
const PORT = 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(url , {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error(error);
  });

// Set up routes
app.use('/register', userRoutes);
app.use('/flights', flightRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
