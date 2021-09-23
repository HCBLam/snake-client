const net = require("net");
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

    // event handler:  what to do when first connected
    conn.on('connect', () => {
      console.log('Successfully connected to game server');
      conn.write('Name: HCB');
      //conn.write('Move: up');
    });

    // event handler:  what to do when receiving data from the server
    conn.on('data', (data) => {
      console.log('Snek says:  ', data);
    });

  return conn;
};

module.exports = { connect };
