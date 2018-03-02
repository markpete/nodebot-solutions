const {Board, Led, Button} = require("johnny-five");
const board = new Board();

var led;
var button;

board.on('ready', () => {
    led = new Led(9);
    button = new Button(5);
    button.on("press", () => {
        led.toggle();
    });
});