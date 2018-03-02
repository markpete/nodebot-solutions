const {Board, Servo, Sensor, Fn} = require("johnny-five");
const board = new Board();

board.on('ready', () =>{
    const sensor = new Sensor(2);
    const servo = new Servo(9);

    sensor.on('change', () => {
        let angle = Fn.map(sensor.value, 0, 1023, 0, 179);
        console.log(sensor.value, ' => ', angle)
        servo.to(angle);
    });
});