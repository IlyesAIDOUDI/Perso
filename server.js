const http = require('http');
http.createServer(function (req, res) {
    // server code
    console.log(`${req.method} ${req.url}`);
    res.end('hello world!');
}).listen(9000);
console.log('Le serveur écoute le port 9000');

fs.readFile('text.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
        return;
    }
    txt = console.log(data);
    document.getElementById("SpanID").textContent = "New Text";
})