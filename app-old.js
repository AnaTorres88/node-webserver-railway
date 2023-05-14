const http = require('http');
const server = http.createServer((req, res)=> {
    res.write('Hola Mundo');
    res.writeHead(200, {'Content-type': 'text/plain'}); // todo bien
    res.writeHead(201); // cuando creamos algo

    res.end();
});

server.listen(3000);
console.log('Escuchando el puerto 3000');