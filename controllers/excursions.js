const Trip = require('../models/trip');

module.exports = {
    create,
}

async function create(req, res) {
    req.body.activityDate = new Date(req.body.activityDate)
    console.log('req.body: ', req.body)
    const trip = await Trip.findById(req.params.id);


    trip.excursions.push(req.body);
    
    try {
        await trip.save();
    } catch(err) {
        console.log(err);
    }
    res.redirect(`/trips/${trip._id}`);
};