//here we do the code of crud to add,edit ,delete pilotos
let conex = require('../config/conexion')

const controller = {}

controller.delete = (req, res) => {
  const { id_pilot } = req.params
}


controller.edit = (req, res) => {
  const { id } = req.params
  const aux = req.params.id_pilot
 // console.log({ id_pilot }, req.params)
  //console.log(aux)
  conex.query(
    'select * from pilot where id_pilot = ?',
    [id],
    (err, pilot) => {
      if (err) {
        throw err
      } else {
        res.render('./templates/editPilot', {
          //porque cusotmer es arreglo
          title: 'hola',
          data: pilot[0],
        })
      }
    },
  )
}


controller.update = (req, res)=>{

}



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
