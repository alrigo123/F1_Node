const mysql = require('mysql');

//Create data to connecto MySQL
let conex =  mysql.createConnection({
          host:'biue9pqpuxyldg0nkiex-mysql.services.clever-cloud.com',
          user: 'uigydhtqlgwmf9zt',
          port: '3306',
          password: 'Vgs2IFXV5OJGoCci6oJu',
          database : 'biue9pqpuxyldg0nkiex'
});

//Creating connection to mysql
conex.connect((err)=>{
    if(!err){
       // console.log(conex.config.database)
        console.log(`Success connected to ${conex.config.database} database`);
    }else{
        console.log(`Error connecting to ${conex.config.database} - ${err}`);
    }
})


module.exports = conex;