const mongoose = require('mongoose');
const Schema = mongoose.Schema

const excursionSchema = new Schema ({
    activity: {
        type: String,
        required: true
    }, 
    activityDate: {
        type: Date,
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
        required: true,
        validate: {
            validator: function(startDate) {
                const date = new Date()
                return (
                    startDate && 
                    (
                        startDate > date || 
                        startDate.toDateString() === date.toDateString()
                    )
                )
            },
            message: 'A trip start date cannot be before the current date.'
        }
    },
    endDate: {
        type: Date,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    excursions: [excursionSchema],
    flights: [flightSchema],
    // hotels: [hotelSchema],
}, {
    timestamps: true
});
module.exports = mongoose.model('Trip', tripSchema)