//
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const colors = require('colors');
const app= express();
const MongoClient = require('mongodb').MongoClient;


//settings
app.set('port',process.env.PORT || 2500);
//template which we are gonna work
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

//connection string
const uri = 'mongodb://localhost/formula';
const con = new MongoClient(uri,{useNewParsers:true});
    //if connection true
    con.connect(err => {
        //define table
        const pilots = con.db("formula").collection('pilot');

        //Insert data pilot 
        let pilot = {id = 1 , name = "Lewis" , last_name = "Hamilton", country: "United Kingdom", 
        age : "30", points:"130", photo:"lewis.jpg", id_team : "1"}
    })


module.exports = app;











app.listen(app.get('port'),()=>{
console.log(`Server listening in ${app.get('port')}`.yellow)
})