const Trip = require('../models/trip');

module.exports = {
    create,
}

async function create(req, res) {
    const trip = await Trip.findById(req.params.id);
    
    // Assuming req.body.activity contains the activity for the excursion
    const activity = req.body.activity;

    // Ensure activity is a string
    if (typeof activity === 'string') {
        // Push the activity to the excursions array
        trip.excursions.push({ activity });

        try {
            await trip.save();
            res.redirect(`/trips/${trip._id}`);
        } catch(err) {
            console.log(err);
            res.redirect('/trips');
        }
    } else {
        // Handle invalid activity
        console.log('Invalid activity:', activity);
        res.redirect('/trips');
    }
}