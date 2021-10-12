const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const conex = require('../config/conexion')
const { promisify } = require('util')

const controller = {}

controller.register = async (req, res, next) => {
  try {
    const name_user = req.body.name_user
    const user = req.body.user
    const pass = req.body.pass
    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(pass, salt)
    console.log(name_user, user, hashPass, pass)

    conex.query(
      'INSERT INTO user SET ?',
      { name_user: name_user, user: user, pass: hashPass },
      (err, user) => {
        console.log(user)
        if (err) {
          throw `Error if => ${err.message}`
        }
        res.redirect('/login')
        //console.log(name_user,hashPass,pass);
      },
    )
  } catch (error) {
    throw `Error catch => ${error.message}`
  }
}

controller.login = async (req, res, next) => {
  try {
    const user = req.body.user
    const pass = req.body.pass
    conex.query(
      'SELECT * FROM user where user = ?',
      [user],
      async (err, user) => {
        if (user.length == 0 || !(await bcrypt.compare(pass, user[0].pass))) {
          res.render('login', {
            alert: true,
            alertTitle: 'Error',
            alertMessage: 'Error de usuario',
            alertIcon: 'error',
            showConfirmButton: true,
            timer: false,
            ruta: 'login',
          })
        } else {
          const id = user[0].id
          const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE,})
          console.log(`Token ${token} for the ${user} user`)

          const cookieOptions = {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
            httpOnly: true,
          }
          res.cookie('jwt',token,cookieOptions)
          res.render('login',{
            alert: true,
            alertTitle: 'Conexion exitosa',
            alertMessage: 'Login correcto',
            alertIcon: 'success',
            showConfirmButton: false,
            timer: 800,
            ruta: 'listPilot',
          });
        }
      },
    )
  } catch (error) {
    throw `Error catching => ${error.message}`
  }
}

module.exports = controller
