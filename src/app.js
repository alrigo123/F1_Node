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

app.use(morgan('dev'))


/* MONGO 
//connection string
const uri = 'mongodb://localhost/formula';
const con = new MongoClient(uri,{useNewParsers:true});
    //if connection true
    con.connect(err => {
        //define table
        const pilots = con.db("formula").collection('pilot');

        //Insert data pilot 
     //   let pilot = {id = 1 , name = "Lewis" , last_name = "Hamilton", country: "United Kingdom", age : "30", points:"130", photo:"lewis.jpg", id_team : "1"}
    })


    */

//midelwares , we can use multer ,and we have documentation about how to use 
    
//routes
app.use('/', index);



//listen the server
app.listen(app.get('port'), (req, res) => {
  console.log(`Listening on port ${app.get('port')}!!`)
});

module.exports = app;









