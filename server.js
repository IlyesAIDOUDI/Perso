const fs = require('fs');
fs.readFile('text.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
        return;
    }
    //console.log(data);
})
const data = txt;

const http = require('http');
http.createServer(function (req, res) {
    // server code
    console.log(`${req.method} ${req.url}`);
    res.end(txt);

}).listen(9000);
console.log('Le serveur écoute le port 9000');

