// 1. Modéliser un tableau
var tailles = [
	"US 6",
	"US 7",
	"US 9",
	"US 10"
];

for (var i = 0; i < tailles.length; i = i + 1) {
	$("#groupe-boutons").append('<button type="button" class="btn btn-outline-dark mr-2">' + tailles[i] + '</button>');
}

// 2. Comment accéder à un élément du tableau, grâce à son index
console.log(tailles[2]);

// 3. Propriété pour connaître la quantité d'éléments dans le tableau
console.log(tailles.length);

// 4. Boucle dans sa forme la plus simple
// 6. On ajuste la condition de sortie pour la rendre dynamique
for (var i = 0; i < tailles.length; i = i + 1) {
	// 5. On rend l'index dynamique en se servant de la variable i
	console.log(tailles[i]);
}
