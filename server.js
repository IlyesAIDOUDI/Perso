const http = require('http');
http.createServer(function (req, res) {
    console.log(`${req.method} ${req.url}`);
    const fs = require('fs');
    fs.readFile('text.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            return;
        }
        res.end(data); //lecture du fichier text.txt sur l'adresse http://localhost:9000/
    })

}).listen(9000);
console.log('Le serveur écoute le port 9000');

