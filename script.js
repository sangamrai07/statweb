// Get the serial port
var serial;

function setup() {
  // Initialize the serial port
  serial = new p5.SerialPort();
  serial.open("COM3");
  serial.on('data', gotData);
}

function gotData() {
  // Read the incoming data
  var data = serial.readLine();
  if (data === '1') {
    document.getElementById("status-button").innerHTML = "Full";
  } else {
    document.getElementById("status-button").innerHTML = "Empty";
  }
}
