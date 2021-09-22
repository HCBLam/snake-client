const { connect } = require('./client');

// This sets up stdin and the UI to accept user input
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // This is registering an event listener for stdin:  it will listen for user key input.
  stdin.on('data', handleUserInput);
  return stdin;
};

// This defines the user input keys and what they do
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
}

console.log("Connecting ...");
connect();
setupInput();
