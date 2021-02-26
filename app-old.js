const http = require("http");
const { report } = require("process");

http.createServer((req, res) => {
    res.writeHead(200, { "Contentent-Type": "application.json" });
    let salida = {
        nombre: "Jesus",
        edad: "18",
        url: req.url
    }
    res.write(JSON.stringify(salida));



    //res.write("Hola Mundo");
    res.end();
}).listen(8080);

console.log("Escuchando el puerto 8080");