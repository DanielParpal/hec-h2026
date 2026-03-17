// Modélisation des données
var manteauA = {
	nom: "Chandail Better Sweater",
	prix: 139,
	evaluation: 3.5
};
var manteauB = {
	nom: "Haut à capuchon en polaire",
	prix: 120,
	evaluation: 4
};
var manteauC = {
	nom: "Veste en laine polaire Fireside de MEC",
	prix: 55,
	evaluation: 4
};

// On regroupe les objets dans un tableau
// Structure imbriquée
var manteaux = [
	manteauA,
	manteauB,
	manteauC
];

console.log(manteaux[1]["nom"]);
console.log(manteaux[0]["prix"]);

// Boucle pour parcourir mon tableau de manteaux
// Filtre = condition dans une boucle
for (var i = 0; i < manteaux.length; i = i + 1) {
	if (manteaux[i]["evaluation"] >= 4) {
		console.log("Bonne évaluation!");
		console.log(manteaux[i]["nom"]);
	}
}
