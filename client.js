/*jshint esversion: 6 */

// Connect to server
const net = require('net');
const socket = net.createConnection(6969, '0.0.0.0', function(){
  const clientID = socket.remoteAddress;
  console.log("Welcome " + clientID + "! You are now connected to the server.");
});

// Input data and pipe to server
socket.on('connect', function(){
  process.stdin.pipe(socket);
});

// Client should listen and recieve data from server
socket.on('data', function(data){
    process.stdout.write(data);
  });
