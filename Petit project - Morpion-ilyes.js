const { clear } = require("console");
const readline = require("readline");
const { start } = require("repl");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


//mygame();
function starrt() { //Non activé
	var menu = require('console-menu');
	const { exec, spawn } = require('node:child_process');
	menu([
		{ hotkey: '1', title: 'Jouer' },
		{ hotkey: '2', title: 'Quitter' },
		{ separator: true },				//Def du menu
		{ hotkey: '?', title: 'Help' },
	], {
		header: 'Morpion',
		border: true,
	}).then(item => {
		if (item) {
			if (JSON.stringify(item) == '{"hotkey":"1","title":"Jouer"}') {
				console.clear();
				choice = '';
				mygame(); //Lancer le jeu  //PROBLEME lance le jeu mais écrit en doublons
			}
			if (JSON.stringify(item) == '{"hotkey":"2","title":"Quitter"}') {
				console.clear();
				process.exit(); //Quitter si le client le veut 
			}
			if (JSON.stringify(item) == '{"hotkey":"?","title":"Help"}') {
				console.clear();
				console.log("Ya quoi que ta pas compris ?");
			}
		} else {

		}
	});
}

function mygame() {
	console.log("\nVoici le plan du codage du morpion : \n1, 2, 3\n4, 5, 6\n7, 8, 9    Il faut taper le chiffre correspondant à la case.\n"); //Codage du morpion
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	let player = 'X';    //Joueur principale X
	console.log('\n\n');
	let morpionn = [
		' ', ' ', ' ',
		' ', ' ', ' ',  //Definition du tableau 
		' ', ' ', ' '
	];
	const defaultPlayer = () => {
		rl.question("\nLe 1er joueur joue le X, et la partie vas commencer.\nÊtes-vous prêt ? 'oui' ou 'non' \n- ", function (defaultOrChoose) {
			let choice = defaultOrChoose.toLowerCase();
			if (choice == 'non') { //Si nous sortons "non", les joueur peuvet changés leur Motif X <--> O
				setPlayer();
			}
			else if (choice === 'oui') { //Si nous sortons "oui", la partie commence
				console.clear();
				console.log(`\nLe joueur X commence...\n\nC'est parti !\n\n\n\n`);
				printBoard();
				playTickTacToe();
			}
			else if (choice === 'stop') { //Si nous sortons "stop", le programme s'arrete.
				console.log("");
				process.exit(0);
			}
			else {
				defaultPlayer();
			}


		});

	}

	const setPlayer = () => { //--> Réponse "non" -> Changement de motif

		rl.question("Le 1er joueur joue le X, entrez 'O' pour que le Joueur O commence, sinon entrez 'X'.\n- ", function (whichPlayer) {

			changePlayer(whichPlayer);
		});

	}

	const changePlayer = (playerChange) => {

		let mooov = playerChange.toUpperCase();

		if (mooov === 'O' || mooov === 'X') { //Verification du mooov et changement de motif si besoin
			console.log(`Le joueur ${mooov} commence !\n`)
			player = mooov;
			printBoard();
			playTickTacToe();
		} else {
			setPlayer();
		}

	}
	const playTickTacToe = () => {
		let continePlay = false;
		for (i = 0; i < morpionn.length; i++) {
			if (morpionn[i] === ' ') {
				continePlay = true;
			}
		}
		if (continePlay === true) {
			rl.question("\nA votre tour!  \n- ", function (movve) {
				console.clear(); //Nettoyage de la console avant l'affichage du morpion
				gameplayer(movve)
			});

		}
	};

	const gameplayer = (move) => {
		let moveToCheck = parseInt(move) - 1;
		let i;
		for (i = 0; i < morpionn.length; i++) {

			if (moveToCheck == i && morpionn[i] === ' ') {

				morpionn[i] = player;
				if (player === 'X') {
					player = 'O';
				} else if (player === 'O') {
					player = 'X'
				}


			} else {
				playTickTacToe();
			}
		}

		console.log('\n');
		printBoard();
		const winner = calculateWinner();

		if (winner != ' ') {
			console.clear();
			console.log(`\nEt le vainqueur est le joueur ${winner} !!!\nSi tu veux rejouer, n'hésite pas à taper :\n- node Morpion.js.\n\n`);
			process.exit(0);
			//starrt(); //<-- A retravailler 
			function a1() {
				rl.question("Voulez-vous rejouer au jeu du Morpion ? 'oui' ou 'non.\n- ", function (repons) {
					if (repons == 'oui') {
						//console.clear();
						//mygame();
					}
					else if (repons == 'non') {
						//process.exit(0);
					}
					else {
						//console.log("Echec")
						//console.clear();
						a1();
					}
				});
			}
			//process.exit(0);

		}
		playTickTacToe();


	}

	const calculateWinner = () => {  //VERIFICATION s'il y a un jeu gagant

		if (morpionn[0] == morpionn[1] && morpionn[0] == morpionn[2]) {
			return morpionn[0];

		} else if (morpionn[3] == morpionn[4] && morpionn[3] == morpionn[5]) {
			return morpionn[3];

		} else if (morpionn[6] == morpionn[7] && morpionn[6] == morpionn[8]) {
			return morpionn[6];

		} else if (morpionn[0] == morpionn[3] && morpionn[0] == morpionn[6]) {
			return morpionn[0];

		} else if (morpionn[1] == morpionn[4] && morpionn[1] == morpionn[7]) {
			return morpionn[1];

		} else if (morpionn[2] == morpionn[5] && morpionn[2] == morpionn[8]) {
			return winner = morpionn[2];

		} else if (morpionn[0] == morpionn[4] && morpionn[0] == morpionn[8]) {
			return morpionn[0];
		} else if (morpionn[2] == morpionn[4] && morpionn[2] == morpionn[6]) {
			return morpionn[2];
		}

		return ' ';
	}


	const printBoard = () => {

		let line = "";
		for (let i = 1; i < 10; i++) {
			line += morpionn[i - 1] + ' | ';  //Affichage du model de morpion

			if (i % 3 === 0) {
				console.log(line);				//Affichage du model de morpion
				console.log('------------')			//Affichage du model de morpion
				line = "";
			}

		}
	}

	printBoard();
	defaultPlayer();
}

rl.question("\n\nJeu du Morpion edited by Ilyes\nPour commencer, taper 'go'.\n- ", function (repons) {
	if (repons == 'go') {
		console.clear();
		console.log("oui-ok");
		mygame();
	}
	else {
		console.clear();
		console.log("Echec");
		rl.question("\n\nJeu du Morpion edited by Ilyes\nPour commencer, taper 'go'.\n- ", function (reponss) {
			if (reponss == 'go') {
				console.clear();
				console.log("oui-ok");
				mygame();
			}
			else {
				console.clear();
				console.log("Echec");
				rl.question("\n\nJeu du Morpion edited by Ilyes\nPour commencer, taper 'go'.\n- ", function (reponsss) {
					if (reponsss == 'go') {
						console.clear();
						console.log("oui-ok");
						mygame();
					}
					else {
						console.clear();
						console.log("C'est trop frère tu sais pas écrire");
						process.exit(0);
					}
				})

			}
		})

	}
})
