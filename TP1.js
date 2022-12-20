//1 Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.

function somme(x, y) {
    z = x + y;
    console.log(z);    //Addition
}
somme(45, 27);

//2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.


const myArray = [123, 213, 231, 132, 312, 321]; //Declaration de la chaine de nombre
function MaxNb(nombre) {
    nombre = Math.max(...myArray)  //Plus grand nombre de la chaine
    console.log(nombre);  //Affichage du plus grand nombre de la chaine
}
MaxNb(myArray)

//3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.


function SupVoy(String3) {
    mystring3 = String3.replaceAll("a", ""); mystring3 = mystring3.replaceAll("A", "");
    mystring3 = mystring3.replaceAll("e", ""); mystring3 = mystring3.replaceAll("E", "");
    mystring3 = mystring3.replaceAll("i", ""); mystring3 = mystring3.replaceAll("I", "");    //Suppression voyelles
    mystring3 = mystring3.replaceAll("o", ""); mystring3 = mystring3.replaceAll("O", "");
    mystring3 = mystring3.replaceAll("u", ""); mystring3 = mystring3.replaceAll("U", "");
    mystring3 = mystring3.replaceAll("y", ""); mystring3 = mystring3.replaceAll("Y", "");

    console.log(mystring3);
}

SupVoy("ceci est une PHRASE DE TEST");


//4 Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triées par ordre alphabétique.

const Carac = ['Avion', 'Téléphone', 'Bouche', 'Chaise'];  //Declaration de la chaine de caractère

function Tri(NewCarac) {
    NewCarac = Carac.sort();  //Tri dans l'ordre alphabétique
    console.log(Carac);  //Affichage du nouvel ordre
}
Tri(Carac);

//5

//6

//7

//8  Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.

function MinVoy(String8) {
    mystring8 = String8.replaceAll("a", "A");
    mystring8 = mystring8.replaceAll("e", "E");
    mystring8 = mystring8.replaceAll("i", "I");  //Changement des voyelles minuscule en majuscule
    mystring8 = mystring8.replaceAll("o", "O");
    mystring8 = mystring8.replaceAll("u", "U");
    mystring8 = mystring8.replaceAll("y", "Y");
    console.log(mystring8);
}

MinVoy("ceci est une phrase de test");

//9  Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.


function Compteur(str) {
    var vowelsCount = 0;  //Compteur à 0
    var string = str.toString();
    for (var i = 0; i <= string.length - 1; i++) {
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u" || string.charAt(i) == "y") {
            vowelsCount += 1;  //Incrémente de 1 le compteur à chaque voyelle minuscule
        }
        if (string.charAt(i) == "A" || string.charAt(i) == "E" || string.charAt(i) == "I" || string.charAt(i) == "O" || string.charAt(i) == "U" || string.charAt(i) == "Y") {
            vowelsCount += 1;  //Incrémente de 1 le compteur à chaque voyelle majuscule
        }
    }
    console.log(vowelsCount);  //Affichage du compteur avec le mot donné
}

Compteur("Abracadabra !");

//10  Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules.

function MajVoy(String) {
    mystring = String.toUpperCase();
    mystring = mystring.replaceAll("A", "a");
    mystring = mystring.replaceAll("E", "e");
    mystring = mystring.replaceAll("I", "i");  //Changement des voyelles majuscule en minuscule
    mystring = mystring.replaceAll("O", "o");
    mystring = mystring.replaceAll("U", "u");
    mystring = mystring.replaceAll("Y", "y");
    console.log(mystring);
}

MajVoy("AbraCadABRA");

