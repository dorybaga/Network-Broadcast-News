/*jshint esversion: 6 */

//
const net = require('net');

// Create new server
const server = net.createServer(function(socket){
  console.log('A new client is connected!');
  socket.on('data', function(data){
    console.log(data.toString());
  });
});

// Make server listen
server.listen(6969, '0.0.0.0', function(){
  console.log('Server is listening on port 6969');
});

