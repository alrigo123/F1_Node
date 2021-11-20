let conex = require('../config/conexion')
let model = require('../model/pilot')
const controller = {}

//to show names of teams
controller.team = async (req, res) => {
  await model.team(conex, async (err, teams) => {
    if (err) {
      return res.json(err)
    } else {
      res.render('./templates/newPilot', {
        title: 'algo sera',
        equipos: teams,
      })
    }
  })
}

// to show the pilots in the query
controller.list = async (req, res) => {
  await model.get(conex, (err, pilots) => {
    if (err) {
      res.json(err)
    }
    res.render('position', {
      title: 'Position season 2021',
      data: pilots,
    })
  })
}

controller.listControl = async (req, res) => {

  
  await model.listControl(conex, (err, pilots) => {
    if (err) {
      res.json(err)
    }
    res.render('./templates/listPilot', {
      title: 'Pilots from 2021 season',
      data: pilots,
    })
    //  console.log(pilots);
  })
}

controller.create = async (req, res) => {
  const new_employee = new Employee(req.body)

  model.create(conex,new_employee, (err, employee) =>{
    if (err)
    res.send(err);
  });
  
}

module.exports = controller
