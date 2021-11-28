//here we do the code of crud to add,edit ,delete pilotos
let conex = require('../config/conexion')

const controller = {}

controller.delete = async (req, res) => {
  const { id } = req.params
  console.log(req.params)

  conex.query(
    'DELETE FROM pilot where id_pilot = ?',
    [id],
    async (err, pilot) => {
      res.redirect('/listPilot')
      console.log(pilot)
    },
  )
}

controller.edit = (req, res) => {
  const { id } = req.params
  const aux = req.params.id_pilot
  // console.log({ id_pilot }, req.params)
  //console.log(aux)
  conex.query(
    'select * from pilot where id_pilot = ?',
    [id],
    async (err, pilot) => {
      if (err) throw err
      conex.query('SELECT id_team,name_team FROM team', (err, teams) => {
        if (err) throw err

        res.render('./templates/editPilot', {
          //porque cusotmer es arreglo
          title: 'hola',
          data: pilot[0],
          equipos: teams,
        })
      })
    },
  )
}

//when i submit the form
controller.update = (req, res) => {
  const { id } = req.params
  const newPilot = req.body
  //console.log({id}, newPilot);
  conex.query(
    'UPDATE pilot set ? where id_pilot = ?',
    [newPilot, id],
    async (err, rows) => {
      // console.log(rows);
      if (err) throw err.message
      await res.redirect('/listPilot')
    },
  )
  res.redirect('/listPilot')
}

//insert new pilot
controller.add = async (req, res) => {
  console.log('File: ', req.file)
  //Undefined because miss enctype in ejs form
  console.log(req.body)

  const data = req.body
  //console.log("esta es la dataaaaa",data)
  conex.query('INSERT INTO pilot set ?', [data], async (err, pilot) => {
    if (err) {
      throw err
    } else {
      console.log(pilot)
      await res.redirect('/listPilot')
    }
  })
}

module.exports = controller
