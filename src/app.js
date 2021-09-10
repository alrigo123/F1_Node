//
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const colors = require('colors');
const app= express();
const MongoClient = require('mongodb').MongoClient;
const index = require('./routes/index') 
const polka = require('polka')
const server = polka()
//settings
app.set('port',process.env.PORT || 2828);
//template which we are gonna work
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
//static
app.use(express.static(path.join(__dirname, 'public')))


//middlewares  falta multer y otrs maasxdxdxd
app.use(morgan('dev'))

app.use(express.urlencoded({extended : false}));
app.use(express.json());
//midelwares , we can use multer ,and we have documentation about how to use 
    
//routes
app.use('/', index);



//listen the server
app.listen(app.get('port'), (req, res) => {
  console.log(`Listening on port ${app.get('port')}!!`)
});

module.exports = app;









