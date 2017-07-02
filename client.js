/*jshint esversion: 6 */

// Connect to server

const net = require('net');
const client = net.createConnection(6969, '0.0.0.0', function(){
  console.log('Client is connected to the server!');
});

// Input data and pipe to server

client.on('connect', function(){
  process.stdin.pipe(client);
});