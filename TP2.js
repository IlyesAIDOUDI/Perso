// 1 Écrivez un programme Node.js qui lit un fichier et imprime son contenu dans la console.

const fs = require('fs');

fs.readFile('text.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log(data);
    document.getElementById("SpanID").textContent = "New Text";
})

//2 Écrivez un programme Node.js qui lit un fichier, modifie son contenu et réécrit le contenu modifié dans le fichier.

const fs = require('fs');

C = 'lol';  //Nouveau contenue du fichier texte

fs.writeFile('text.txt', C, function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
});

//3 Écrivez un programme Node.js qui utilise le module http pour créer un serveur simple qui sert un fichier statique.

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

//4 Écrivez un programme Node.js qui utilise le module fs pour lister les fichiers d'un répertoire.

const fs = require("fs");

let directory_name = "C:\\Users\\IAD\\Desktop\\WORK";  // Chemin du repertoire en question

let filenames = fs.readdirSync(directory_name);

console.log("\nFichiers dans le repertoire : ");
filenames.forEach((file) => {
    console.log("File:", file);  //Lister les fichiers
});

//5 Écrivez un programme Node.js qui utilise le module fs pour créer un nouveau fichier et y écrire des données.

const fs = require('fs');
namef = 'name.txt';
contenuef = 'Contenue!';
fs.writeFile(namef, contenuef, function (err) {
    if (err) throw err; console.log('Fichier créé !');
});

//6 Écrivez un programme Node.js qui utilise le module os pour obtenir le répertoire personnel de l'utilisateur actuel.



















