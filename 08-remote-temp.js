const {Board, Sensor} = require("johnny-five");
const dnode = require('dnode');
const board = new Board();

function toCelsius(sensor) {
    return ((sensor.value * 0.004882814) - 0.5) * 100;
}


board.on('ready', () => {
    const sensor = new Sensor({
        controller: 'TMP36',
        pin: 'A0'
    });
    var temp = null;
    var once = true;

    sensor.on('data', () => {
        temp =  toCelsius(sensor);
    });
    
    const server = dnode({
        getTemperature: function (cb) {
            cb(temp);
        }
    });

    server.listen(1337);
});