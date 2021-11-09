const express = require('express');
const router = express.Router();
const controllerBD = require('../controllers/pilotcontroller');
const dataController = require('../controllers/datacontroller')
const viewController = require('../controllers/c_views')
const authController = require('../controllers/c_auth')

router.get('/', viewController.index)

router.get('/autor', viewController.autor )

router.get('/pilot',viewController.pilot)


router.get('/position',controllerBD.list)

router.get('/listPilot', controllerBD.listControl);

//crear un controller para tener con bd
router.get('/newPilot', controllerBD.team);
router.post('/newPilot', dataController.add)


router.get('/editPilot/:id',dataController.edit);
router.post('/editPilot/:id', dataController.update);


router.get('/deletePilot/:id',dataController.delete);

//Login Route
router.get('/login', viewController.log)
router.post('/login', authController.login)

//Register route
router.get('/register',viewController.reg )
router.post('/register',authController.register);



module.exports = router;