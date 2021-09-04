const mysql = require('mysql');

let conex = mysql.createConnection({
          host:'localhost',
          user: 'root',
          password: '',
          database : 'formula'
});

conex.connect((err)=>{
    if(!err){
       // console.log(conex.config.database)
        console.log(`Success connected to ${conex.config.database} database`);
    }else{
        console.log(`Error connecting to ${conex.config.database} - ${err}`);
    }
})


module.exports = conex;