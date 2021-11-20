module.exports = {
  get(conex, [user], foo) {
    conex.query('SELECT * FROM user WHERE user = ?', [user], foo)
  },
}
