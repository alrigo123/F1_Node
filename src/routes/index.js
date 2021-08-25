const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
res.render('index', {title: 'Formula 1 en Español El mas Grande de Peru'});;
})

module.exports = router