const express = require('express');
const router = express.Router();
const excursionsCtrl = require('../controllers/excursions')

router.post('/trips/:id/excursions', excursionsCtrl.create);
router.delete('/trips/:id', excursionsCtrl.delete)

module.exports = router;