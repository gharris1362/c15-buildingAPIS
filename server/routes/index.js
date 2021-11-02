const express = require('express');
const router = express.Router();

const chirpsRouter = require('./chirps');


router.use('/chirps', chirpsRouter);

module.exports = router;