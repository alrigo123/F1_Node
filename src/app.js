//
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const colors = require('colors');
const app= express();

//settings
app.set('port',process.env.PORT || 2500);
//template which we are gonna work
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))





module.exports = app;











app.listen(app.get('port'),()=>{
console.log(`Server listening in ${app.get('port')}`.yellow)
})