const {Board, Led} = require("johnny-five");
const board = new Board();

board.on('ready', () => {
    var led = new Led(13);
    led.strobe(1000);
});