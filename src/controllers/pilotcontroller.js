let conex = require('../config/conexion');

const controller = {}

//to show the pilots in the query
controller.list = (req,res)=>{
        conex.query('select * from pilot',(err,pilots)=>{
            if(err){
                res.json(err)
            } 
            res.render('position',{
                title : 'Position from this website',
                data : pilots
            });
        })
   
}



module.exports = controller