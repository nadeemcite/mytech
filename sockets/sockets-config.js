module.exports=function(io){
    require('./connection')(io);
    require('./test')(io);
}