var express = require('express');
var router = express.Router();
const tripsCtrl = require('../controllers/trips')

/* GET users listing. */
router.get('/', tripsCtrl.index);

module.exports = router;
