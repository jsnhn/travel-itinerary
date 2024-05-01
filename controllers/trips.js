const Trip = require('../models/trip')

module.exports = {
    index,
    new: newTrip,
}

async function index(req, res) {
    try {
        const trips = await Trip.find({});
        res.render('trips/index', {
            trips,
        });
    } catch(err) {
        console.log(err);
        res.send(err.message)
    }
}

async function newTrip(req, res) {
    res.render('trips/new'), {
        title: 'Plan a New Trip'
    }
};