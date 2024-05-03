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
    req.body.user = req.user._id;
    req.body.startDate += 'T00:00';
    req.body.endDate += 'T00:00';

    try {
        const trip = await Trip.create(req.body);

        res.redirect(`/trips/${trip._id}`);
    } catch(err) {
        console.log(err);
        res.render('trips/new', {
            errorMsg: err.message
        });
    }
}

async function show(req, res) {

    function getDatesBetween(startDate, endDate) {
        let dates = [];
        let currentDate = new Date(startDate);
    
        while (currentDate <= endDate) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }
    
        return dates;
    }
    try {
        const trip = await Trip.findById(req.params.id);
        const datesBetween = getDatesBetween(trip.startDate, trip.endDate);

        console.log("Dates Between:", datesBetween);

        res.render('trips/show', {
            trip,
            datesBetween
        });
    } catch(err) {
        console.log(err);
        res.redirect('/trips');
    }
}