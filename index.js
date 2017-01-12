var SerialPort = require('serialport');
var port = new SerialPort('/dev/serial0');

var write = function () {
    for (var i = 0; i < 240; i++) {
        port.write(100, function (err) {
            if (err) {
                return console.log('Error on write: ', err.message);
            }
            console.log('message written');
        });
    }

    setTimeout(write, 20);    
};


port.on('open', function () {
    setTimeout(write, 20);
});

// open errors will be emitted as an error event
port.on('error', function (err) {
    console.log('Error: ', err.message);
})