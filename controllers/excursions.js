const Trip = require('../models/trip');

module.exports = {
    create,
}

async function create(req, res) {
    const activities = req.body.activity.filter(activity => activity);  // Filter out empty strings from the activity array
    const activityString = activities.join(', ');  // Join the activities into a single string. activityString contains all non-empty activities as a single string
    const trip = await Trip.findById(req.params.id);
    
    trip.excursions.push({ activity: activityString });
    
    try {
        await trip.save();
    } catch(err) {
        console.log(err);
    }
    res.redirect(`/trips/${trip._id}`);
};