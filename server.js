/*jshint esversion: 6 */

const net = require('net');

// Create new server
const server = net.createServer(function(socket){
  console.log('A new client is connected!');

  // Identify client's IP address
  const clientID = socket.remoteAddress;
  console.log(clientID + " is now available to chat.");

  // Listens for data; if data is recieved (from client) renders data to terminal
  socket.on('data', function(data){
    console.log(clientID + ": " + data.toString());


  });
});

// Make server listen
server.listen(6969, '0.0.0.0', function(){
  console.log('Server is listening on port 6969');
});
