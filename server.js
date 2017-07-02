/*jshint esversion: 6 */

const net = require('net');
const clients = [];

// Create new server
const server = net.createServer(function(socket){
  console.log('A new client is connected!');

  // Add client to list
  clients.push(socket);
  // console.log(clients);

  // Identify client's IP address
  const clientID = socket.remoteAddress;
  console.log(clientID + " is now available to chat.");

  // Listens for data; if data is recieved (from client) renders data to terminal
  socket.on('data', function(data){
    process.stdout.write(clientID + ": " + data.toString());

    // Blast message to other clients connected to chat
    clients.forEach(function(client){
      client.write(data);
    });

  });



});

// Make server listen
server.listen(6969, '0.0.0.0', function(){
  console.log('Server is listening on port 6969');
});


