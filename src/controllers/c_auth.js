const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const conex = require('../config/conexion')
const { promisify } = require('util')
const config = require('../config/enviroment-variables')
const model = require('../model/pilot')
const modelUser = require('../model/user.model')

const controller = {}

//Function to register a new user
controller.register = async (req, res, next) => {
  try {
    //getting the data from form in register.ejs
    const name_user = req.body.name_user
    const user = req.body.user
    const pass = req.body.pass
    //salt to hashing password
    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(pass, salt) //hashing password

    console.log(name_user, user, hashPass, pass)

    //works but error withe templatey try to acople
    conex.query('SELECT * FROM user WHERE user = ?', [user], (err, results) => {
      if (results.length > 0) {
        res.render('./templates/register')
        // throw 'El usuario ya existe'
      }
    })

    //make a query to mysql with the parameters equals to de database
    conex.query('INSERT INTO user SET ?',
      { name_user: name_user, user: user, pass: hashPass }, // dataname : databody
      //user is the param who get filled by the query
      (err, user) => {
        console.log(user)
        if (err) {
          throw `Error if => ${err.message}`
        }

        res.redirect('/login') // -> redirect manda a la url lo que esta en comillas , mientras que render busca en el directorio views
        //console.log(name_user,hashPass,pass);
      })
  } catch (error) {
    throw `Error catch => ${error.message}`
  }
}


//Function to log in a user
//lg_jwt with session
controller.login = (req, res, next) => {
  try {
    //getting the data from form in login.js
    const user = req.body.user
    const pass = req.body.pass
    console.log(user, pass) // -> Try when I log in

    modelUser.get(conex, [user], async (err, results) => {
      if (results.length === 0 || !(await bcrypt.compare(pass, results[0].pass))) {
        /// console.log("Error de logeo");
        res.render('./templates/login', {
          alert: true,
          title: 'Login pero con error',
          alertTitle: 'Error',
          alertMessage: 'Error de usuario',
          alertIcon: 'error',
          showConfirmButton: true,
          timer: false,
          ruta: './templates/login',
        })
      } else {
        model.listControl(conex, (err, pilots) => {
          const id = results[0].id
          const token = jwt.sign({ id: id }, config.JWT_SECRET_KEY, {
            expiresIn: config.JWT_EXPIRE,
          })
          console.log(`Token ${token} for the ${user} user`)

          const cookieOptions = {
            expires: new Date(
              Date.now() + config.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
            ),
            httpOnly: true,
          }
          
          res.cookie('jwt', token, cookieOptions)

          if (err) { res.json(err) }

          res.render('./templates/listPilot', {
            title: 'Pilots from 2021 season',
            data: pilots,
            user: user,
            alert: true,
            alertTitle: 'Conexion exitosa',
            alertMessage: 'Login correcto',
            alertIcon: 'success',
            showConfirmButton: false,
            timer: 800,
            ruta: 'listPilot',
          })
        })
      }
    })

  } catch (error) {
    throw `Error catching => ${error.message}`
  }
}

module.exports = controller
