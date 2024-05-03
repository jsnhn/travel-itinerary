const mongoose = require('mongoose');
const Schema = mongoose.Schema

const excursionSchema = new Schema ({
    activity: {
        type: String,
        required: true
    }, 
}, {
    timestamps: true
});

const tripSchema = new Schema({
    location: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    excursions: [excursionSchema,]
    // flights: [flightSchema],
    // hotels: [hotelSchema],
}, {
    timestamps: true
});
module.exports = mongoose.model('Trip', tripSchema)