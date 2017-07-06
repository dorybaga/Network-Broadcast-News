/*jshint esversion: 6 */

const net = require('net');
const clients = [];

// Create new server
const server = net.createServer(function(socket){
  console.log('A new client is connected!');

  // Add client to list
  clients.push(socket);
  console.log(clients.length);

  // Identify client's IP address
  const clientID = socket.remoteAddress;
  relay(clientID + " is now available to chat. \n");

  // Listens for data; if data is recieved (from client) renders data to terminal
  socket.on('data', function(data){
    // process.stdout.write(clientID + ": " + data.toString());
    relay(clientID + ": " + data, socket);
  });

 // Relay message to other clients connected to chat
  function relay(msg, sender){
    clients.forEach(function(client){
      if(client === socket){
        return;
      } else {
      client.write(msg);

      }
    });
    // process.stdout.write(msg); // comment it back in if we want the server to record the conversation
  }

// Close the socket if client exits the chat
  socket.on('end', function(){
    clients.splice(clients.indexOf(socket));
    relay(clientID + ": " + "has left the chat. \n");
    console.log(clients.length);
  });
 });


// Make server listen
server.listen(6969, '0.0.0.0', function(){
  console.log('Server is listening on port 6969');
});


