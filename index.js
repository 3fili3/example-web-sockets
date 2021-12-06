const wsk = require('ws');

const wss = new wsk.Server({port:5000});

wss.on('connection', (ws) => {
    console.log('cliente conectado');
    ws.on('message', (data) => {
        console.log(data.toString());
        ws.send('Gracias por el mensaje');
    })
})

