const Trip = require('../models/trip');

module.exports = {
    create,
    delete: deleteExcursion,
    edit,
}

async function create(req, res) {
    const trip = await Trip.findById(req.params.id);
    req.body.activityDate = new Date(req.body.activityDate)
    console.log('req.body: ', req.body)
    
    
    trip.excursions.push(req.body);
    
    
    try {
        await trip.save();
    } catch(err) {
        console.log(err);
    }
    res.redirect(`/trips/${trip._id}`);
};

async function deleteExcursion(req, res) {
    console.log('Excursion ID:', req.params.id);
    try {
        const trip = await Trip.findOne({'excursions._id': req.params.id});
        trip.excursions.remove(req.params.id);
        await trip.save();
        res.redirect(`/trips/${trip._id}`);
    } catch(err) {
        console.log(err);
        res.redirect('/trips');
    }
};

async function edit(req, res) {
    try {
        const trip = await Trip.findOne({'excursions._id': req.params.id});
        const excursion = trip.excursions.find(exc => exc._id == req.params.id);
    
        res.render('trips/edit', {
            trip,
            excursion,
        });
    } catch(err) {
        console.log(err);
        res.redirect('/trips');
    }
}