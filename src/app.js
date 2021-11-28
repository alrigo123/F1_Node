const express = require('express')
const path = require('path')
const morgan = require('morgan')
const mysql = require('mysql')
const myConnection = require('express-myconnection')
const colors = require('colors')
const app = express()
const MongoClient = require('mongodb').MongoClient
const index = require('./routes/index')
const polka = require('polka')
const server = polka()
const multer = require('multer')  
const cookieParser = require('cookie-parser')
const config = require('./config/enviroment-variables')

//deotenv config
require('dotenv').config()

//Testing Enviroments Variables
const PORTO = config.PORT
const secret = config.JWT_SECRET_KEY
const expire = config.JWT_EXPIRE
console.log(PORTO, secret, expire)  

//Middlewares
//app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//template which we are gonna work
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
//static
app.use(express.static(path.join(__dirname, 'public')))


/* routes
app.use((req, res) => {
  if (res.status(404)) {
    res.send('Error NO HAY APGINA');
  }
})
*/


//cookies Parser
app.use(cookieParser())

app.use('/', index)


//listen the server
app.listen(PORTO, (req, res) => {
  console.log(`Hi Alex, Server is listening on port ${PORTO}!!`)
})

