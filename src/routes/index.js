const express = require('express');
const router = express.Router();
const controller = require('../controllers/pilotcontroller');

router.get('/', (req,res)=>{
res.render('index', {title: 'Formula 1 en Español El mas Grande de Peru'});;
})

router.get('/autor', (req,res)=>{
    res.render('autor', {title : 'Autor from this website'})
})

router.get('/pilot',(req,res)=>{
    res.render('pilot', {title : 'Pilot from this website'})
})

router.get('/position',controller.list)

router.get('/listPilot', controller.listControl);

router.get('/newPilot', (req, res) => {
res.render('./templates/newPilot',{title : 'New Pilots to add'})
});

router.get('/editPilot', (req, res) => {
res.render('./templates/editPilot',{title : 'Pilot to Edit'})
});


module.exports = router