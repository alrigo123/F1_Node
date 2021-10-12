let conex = require('../config/conexion')
let model = require('../model/pilot')
const controller = {}

//to show names of teams
controller.team = (req, res) => {
  model.team(conex, async (err, teams) => {
    if (err) {
      return res.json(err)
    } else {
      await res.render('./templates/newPilot', {
        title: 'algo sera',
        equipos: teams,
      })
    }
  })
}

// to show the pilots in the query
controller.list = (req, res) => {
  model.get(conex, async (err, pilots) => {
    if (err) {
      res.json(err)
    }
    await res.render('position', {
      title: 'Position season 2021',
      data: pilots,
    })
  })
}

controller.listControl = (req, res) => {
  model.listControl(conex, async (err, pilots) => {
    if (err) {
      res.json(err)
    }
    await res.render('./templates/listPilot', {
      title: 'Pilots from 2021 season',
      data: pilots,
    })
    //  console.log(pilots);
  })
}



module.exports = controller
