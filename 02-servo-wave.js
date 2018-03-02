const {Board, Servo} = require("johnny-five");
const board = new Board();
var servo = null;

board.on('ready', () => {
    servo = new Servo({ pin: 9});
    reset = () => {
        servo.stop();
        servo.center();
    };
    servo.sweep([0, 180]);
    board.wait(3000, reset);
});