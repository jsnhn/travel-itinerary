const Trip = require('../models/trip')

module.exports = {
    index,
    new: newTrip,
    create,
    show,
}

async function index(req, res) {
    try {
        const trips = await Trip.find({ user: req.user._id });  // trips for the currently authenticated user
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

async function create(req, res) {
    req.body.user = req.user._id
    try {
        const trip = await Trip.create(req.body)
        res.redirect(`/trips/${trip._id}`)
    } catch(err) {
        console.log(err)
        res.render('trips/new', {
            errorMsg: err.message
        })
    }
}

async function show(req, res) {
    try{
        const trips = await Trip.findById(req.params.id)

        res.render('trips/show', {
            trips,
        })
    } catch(err) {
        console.log(err)
        res.redirect('/trips')
    }
}