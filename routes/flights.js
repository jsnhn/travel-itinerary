const express = require(express)
const router = express.Router()
const FlightCtrl = ('../contollers/flights')

router.post('trips/:id/flights', FlightCtrl.create)

module.exports = router;