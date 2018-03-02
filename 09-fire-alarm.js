const {Board, Thermometer, Piezo, Led, Button } = require("johnny-five");
const board = new Board();

board.on('ready', () => {
    let tmp36 = new Thermometer({
        controller: "TMP36",
        pin: "A0",
        toCelsius: function(raw) {
            return((raw * 0.004882814) - 0.5) * 100;
        }
    });
    tmp36.active = true;
    tmp36.silence = () => {
        piezo.noTone();
        led.off();
    };
    let piezo = new Piezo({ pin: 9});
    let led = new Led({ pin: 13 });
    let button = new Button({ pin: 5 });

    tmp36.on('data', () => {
        if (tmp36.active && tmp36.C > 50) {
            led.on();
            piezo.frequency(587, 1000);
        } else {
            if( tmp36.C < 50) {
                tmp36.silence();
                tmp36.active = true;
            }
        }
    });

    button.on("press", () => {
        if(tmp36.C <= 50) return;
        tmp36.active = false;
        tmp36.silence();
    });
});