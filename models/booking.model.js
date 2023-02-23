const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookingSchema = new Schema({
    user : { type: ObjectId, ref: 'User' },
    flight : { type: ObjectId, ref: 'Flight' }
});

const Booking = mongoose.model('User', BookingSchema);

module.exports = Booking;
