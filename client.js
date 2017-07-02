/*jshint esversion: 6 */

// Connect to server

const net = require('net');
net.connect(6969, '0.0.0.0', function(){
  console.log('Client is connected to the server!');
});


