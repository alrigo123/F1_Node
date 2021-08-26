const express = require('express');
const router = express.Router();

router.get('/pilot',(req, res) => {
    res.render('pilot',{title: 'PILOTOS A TRAVEZ DE LA HISTORIA DE LA FORMULA 1'} )
})

module.exports = router;