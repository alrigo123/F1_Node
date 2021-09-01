const express = require('express');
const pcontroller = require('../controllers/pilotcontroller.js')
const router = express.Router();

router.get('/position',pcontroller.list);

module.exports = router