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
name5 = 'name.txt';
contenue5 = 'Contenue!';
fs.writeFile(name5, contenue5, function (err) {
    if (err) throw err; console.log('Fichier créé !');
});

//6 Écrivez un programme Node.js qui utilise le module os pour obtenir le répertoire personnel de l'utilisateur actuel.

const os = require("os");
const homeDirectory = os.homedir();
console.log(`Votre répertoire personnel est: ${homeDirectory}`);  // On affiche le dossier principal de l'utilisateur


//7 Écrivez un programme Node.js qui utilise le module child_process pour exécuter un programme en ligne de commande.

const { exec, spawn } = require('node:child_process');
exec('MY.bat', (err, stdout, stderr) => {  //lancement batch MY.bat
    if (err) {
        console.error(err);
    }
    console.log(stdout);
});

//8 Écrivez un programme Node.js qui utilise le module path pour manipuler les chemins de fichiers.

//9 Écrivez un programme Node.js qui utilise le module querystring pour analyser une chaîne de requête URL.

//10 Écrivez un programme Node.js qui utilise le module events pour créer un émetteur d'événements personnalisé.




















