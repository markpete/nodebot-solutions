const {Board, Led, Sensor} = require("johnny-five");
const board = new Board();

board.on('ready', () => {
    let led = new Led(9);
    let sensor = new Sensor({pin: 0, freq: 250});
    sensor.booleanAt(600);
    sensor.on("change", () => {
        if(sensor.boolean) {
            led.on();
        } else {
            led.off();
        }
    });
});