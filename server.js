var express=require('express');
var app=express();
var PORT=process.env.PORT || 5259;
var http=require('http').Server(app);
var io = require('socket.io')(http);
require('./app/routes-config')(app);
require('./sockets/sockets-config')(io);
app.use(express.static(__dirname + '/public'));
app.use(function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
http.listen(PORT, function(err){
    if(err){
        console.log(err);
    }else{
        console.log('listening on *:'+PORT);
    }  
});
   