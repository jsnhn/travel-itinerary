const Trip = require('../models/trip')

module.exports = {
    index,
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
