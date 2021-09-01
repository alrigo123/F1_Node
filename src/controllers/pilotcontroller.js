const controller = {}

controller.list = (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('select * from pilot',(err,pilots)=>{
            if(err){
                res.json(err)
            }
            res.render('position',{
                title : 'Position from this website',
                data : pilots
            });
        })
    })
}



module.exports = controller