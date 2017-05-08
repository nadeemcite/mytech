var app=require('express').Router();
app.use('/s',function(req,res){
    res.send('success 5');
});
module.exports=app;