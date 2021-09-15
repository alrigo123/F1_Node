//here we do the code of crud to add,edit ,delete pilotos
let conex = require('../config/conexion')

const controller = {}

controller.delete = (req, res) => {
  const { id } = req.params;
  console.log(req.params)
  conex.query('DELETE FROM pilot where id_pilot = ?',[id],(err,pilot)=>{
      res.redirect('/listPilot');
      console.log(pilot)
  })
}

controller.edit = (req, res) => {
  const { id } = req.params
  const aux = req.params.id_pilot
  // console.log({ id_pilot }, req.params)
  //console.log(aux)
  conex.query('select * from pilot where id_pilot = ?', [id], async(err, pilot) => {
    if (err) {
      throw err
    } else {
      res.render('./templates/editPilot', {
        //porque cusotmer es arreglo
        title: 'hola',
        data: pilot[0],
      })
    }
  })
  /*
   conex.query('SELECT id_team,name_team FROM team', async (err, teams) => {
    if (err) {
      return res.json(err)
    } else {
     await res.render('./templates/editPilot', {
        equipos: teams
      })
    }
  })
  */
}

//when i submit the form
controller.update = (req, res) => {}

//insert new pilot
controller.add = (req, res) => {
  const data = req.body
  //console.log("esta es la dataaaaa",data)
  conex.query('INSERT INTO pilot set ?', [data], (err, pilot) => {
    if (err) {
      throw err
    } else {
      console.log(pilot)
      res.redirect('/listPilot')
    }
  })
}

module.exports = controller
