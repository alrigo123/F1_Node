//
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
const dotenv = require('dotenv')


//deotenv config

dotenv.config({path :'./env/.env'})

//middlewares  falta multer y otrs maasxdxdxd


app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//midelwares , we can use multer ,and we have documentation about how to use
/*multer*/
const storage = multer.diskStorage({
  destination: path.join(__dirname, './public/img/uploads'),
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})
app.use(
  multer({
    storage: storage,
    dest: path.join(__dirname, './public/img/uploads'),
    limits: { filesize: 10000 },
    fileFilter: (req, file, cb, err) => {
      const filetype = /jpeg|jpg|png|gif/
      const mimetype = filetype.test(file.mimetype)
      const extname = filetype.test(path.extname(file.originalname))
      if (mimetype && extname) {
        return cb(null, true)
      } else {
        cb('Error: File must be a JPG, PNG, or GIF', err)
      }
    },
  }).single('photo_pilot'),
)

//template which we are gonna work
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//static
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use('/', index)

//cookies Parser
app.use(cookieParser());

//clean caché


const PORT = process.env.PORT || 2828;

//listen the server
app.listen(PORT, (req, res) => {
  console.log(`Hi Alex, Server is listening on port ${PORT}!!`)
})


