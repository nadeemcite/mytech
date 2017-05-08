module.exports = function (io) {
    io.on('connection', function (socket) {
        socket.on('mytest', function (msg) {
            console.log('Test Case');
            io.emit('chat message', msg);
        });
    });
}