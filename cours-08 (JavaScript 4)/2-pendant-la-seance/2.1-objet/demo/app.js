// Petit retour sur le tableau
var manteaux = [
	"Sweat à capuchon",
	"Chandail better sweater",
	"Haut à capuchon"
];

for (var i = 0; i < manteaux.length; i = i + 1) {
	console.log(manteaux[i]);
}

console.log("---------");

// Parlons de l'objet
// manteauA -> nom, prix, évaluation
var manteauA = {
	nom: "Chandail Better Sweater",
	prix: 139,
	evaluation: 3.5
};

// Accès aux propriétés
console.log(manteauA["evaluation"]);
// On peut se servir d'une variable pour la propriété
var maPropriete = "prix";
console.log(manteauA[maPropriete]);

// Modifier la valeur d'une propriété
manteauA["prix"] = manteauA["prix"] - 10;
console.log(manteauA["prix"]);

var manteauB = {
	nom: "Haut à capuchon en polaire",
	prix: 120,
	evaluation: 4
}
console.log(manteauB);