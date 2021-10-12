module.exports = {
  get(conex, funcion) {
    conex.query('select * from pilot order by points desc', funcion)
  },
  team(conex, funcion) {
    conex.query('SELECT id_team,name_team FROM team', funcion)
  },
  listControl(conex, funcion) {
    conex.query(
      'SELECT P.id_pilot,P.name_pilot,P.last_name,P.nick,P.country_pilot,P.points, T.id_team,T.name_team FROM pilot P JOIN team T ON P.id_team = T.id_team order by points desc',
      funcion,
    )
  },
  delete(conex, data, funcion) {
    conex.query('DELETE FROM pilot where id_pilot = ?', [data], funcion)
  },
}

/*
SELECT P.id_pilot, T.id_team,T.name,P.name FROM pilot P JOIN team T ON P.id_team = T.id_team;
*/
