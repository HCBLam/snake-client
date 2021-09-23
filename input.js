const net = require("net");


// Stores the active TCP connection object
let connection;


// This defines the user input keys and what they do
const handleUserInput = function (key) {
  // binds the Ctrl + c key combo to exit the program
  if (key === '\u0003') {
    process.exit();
  }

  // to log which key was pressed
  console.log('The key just pressed is:  ', key);

  // binds the w key to move up
  if (key === 'w') {
    connection.write('Move: up');
  }
  // binds the a key to move left
  if (key === 'a') {
    connection.write('Move: left');
  }
  // binds the s key to move down
  if (key === 's') {
    connection.write('Move: down');
  }
  // binds the d key to move right
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 'j') {
    connection.write("Say: I'm hungry!");
  }
  if (key === 'k') {
    connection.write('Say: I need food!');
  }
  if (key === 'l') {
    connection.write('Say: I have the power!');
  }
  if (key === 'u') {
    connection.write('Say: Hi Simsim!');
  }
};

// This sets up stdin and the UI to accept user input
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // This is registering an event listener for stdin:  it will listen for user key input.
  stdin.on('data', handleUserInput);
  return stdin;
};


module.exports = { setupInput };
