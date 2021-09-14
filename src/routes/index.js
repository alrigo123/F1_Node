const express = require('express');
const router = express.Router();
const controllerBD = require('../controllers/pilotcontroller');
const dataController = require('../controllers/datacontroller')

router.get('/', (req,res)=>{res.render('index', {title: 'Formula 1 en Español El mas Grande de Peru'});})

router.get('/autor', (req,res)=>{res.render('autor', {title : 'Autor from this website'})})

router.get('/pilot',(req,res)=>{res.render('pilot', {title : 'Pilot from this website'})})


router.get('/position',controllerBD.list)

router.get('/listPilot', controllerBD.listControl);

//crear un controller para tener con bd
router.get('/newPilot', (req, res) => {res.render('./templates/newPilot',{title : 'New Pilots to add'})});
router.post('/newPilot', dataController.add)


router.get('/editPilot/:id',dataController.edit)
router.post('/editPilot/:id', dataController.update)

module.exports = router;