const {Board, Motor} = require("johnny-five");
const board = new Board();

var motor = null;

spin_up = () => {
    if(!motor) return;
    motor.start(200);
    board.wait(2000, spin_pause)
}

spin_pause = () => {
    motor.stop();
    board.wait(1000, spin_up);
}

board.on('ready', () => {
    motor = new Motor({ pin: 9});
    spin_up();
});