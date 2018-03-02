const {Board, Led, Piezo} = require("johnny-five");
const dgram = require('dgram');

const board = new Board();

board.on('ready', () => {
    var piezo = new Piezo(8);
    const server = dgram.createSocket('udp4');

    server.on('message', () => {
        piezo.tone({
            song: [
                ["C4", 1 / 4]
            ],
            tempo: 100
          });
    });

    server.bind(1337);
});