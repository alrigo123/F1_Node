let conex = require('../config/conexion')

const controller = {}

//to show the pilots in the query
controller.list = (req, res) => {
  conex.query('select * from pilot', (err, pilots) => {
    if (err) {
      res.json(err)
    }
    res.render('position', {
      title: 'Position season 2021',
      data: pilots,
    })
  })
}
controller.listControl = (req, res) => {
  ;[
    conex.query(
      'SELECT P.id_pilot,P.name_pilot,P.last_name,P.nick,P.country_pilot,P.points, T.id_team,T.name_team FROM pilot P JOIN team T ON P.id_team = T.id_team',
      (err, pilots) => {
        if (err) {
          res.json(err)
        }
        res.render('./templates/listPilot', {
          title: 'Pilots from 2021 season',
          data: pilots,
        })
      },
    ),
  ]
}

/*
SELECT P.id_pilot, T.id_team,T.name,P.name FROM pilot P JOIN team T ON P.id_team = T.id_team;
*/

module.exports = controller
