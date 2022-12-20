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

















