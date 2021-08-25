const express = require('express');
const router = express.Router();

router.get('/autor', (req,res)=>{
    res.render('autor', {title : 'Autor from this website'})
})

module.exports = router