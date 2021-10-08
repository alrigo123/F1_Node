let conex = require('../config/conexion')

const controller = {}

//to show names of teams
controller.team = (req, res)=>{
  conex.query('SELECT id_team,name_team FROM team',
  async (err,teams)=>{
  if(err) {return  res.json(err);}
else{
  await res.render('./templates/newPilot', {
    title: "algo sera",
    equipos : teams
  })
}
})
}


//to show the pilots in the query
controller.list = (req, res) => {
  conex.query('select * from pilot order by points desc', async(err, pilots) => {
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
  [
    conex.query(
      'SELECT P.id_pilot,P.name_pilot,P.last_name,P.nick,P.country_pilot,P.points, T.id_team,T.name_team FROM pilot P JOIN team T ON P.id_team = T.id_team order by points desc',
      async (err, pilots) => {
        if (err) {
          res.json(err)
        }
        await  res.render('./templates/listPilot', {
          title: 'Pilots from 2021 season',
          data: pilots,
        })
      //  console.log(pilots);
      },
    ),
  ]
}

/*
SELECT P.id_pilot, T.id_team,T.name,P.name FROM pilot P JOIN team T ON P.id_team = T.id_team;
*/

module.exports = controller
