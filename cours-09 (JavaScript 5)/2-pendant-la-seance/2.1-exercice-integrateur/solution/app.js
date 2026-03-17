// 1. Modélisation des données
var tailles = [5, 6, 7, 8, 9, 10, 11, 12];

var botteA = {
	marque: 'UGG',
	nom: 'CLASSIC MINI PLATFORM Women',
	imageSrc: 'images/ugg-classic-mini-platform.jpeg',
	imageAlt: 'Ugg classic mini platform',
	taillesDispo: [5, 8]
};

var botteB = {
	marque: 'UGG',
	nom: 'NEUMEL PLATFORM Women',
	imageSrc: 'images/ugg-neumel-platform.jpeg',
	imageAlt: 'Ugg neumel platform',
	taillesDispo: [5, 6, 8, 10]
};

var botteC = {
	marque: 'UGG',
	nom: 'CLASSIC MINI II Women',
	imageSrc: 'images/ugg-classic-mini-ii.jpeg',
	imageAlt: 'Ugg classic mini ii',
	taillesDispo: [7, 8, 9, 10]
};

var botteD = {
	marque: 'UGG',
	nom: 'CLASSIC ULTRA MINI Women',
	imageSrc: 'images/ugg-classic-ultra-mini.jpeg',
	imageAlt: 'Ugg classic ultra mini',
	taillesDispo: [6, 9]
};

var bottes = [
botteA, botteB, botteC, botteD,
];

// 2. Génération dynamique de l'état initial de la page (en utilisant les données sources)
for (var i = 0; i < tailles.length; i = i + 1) {
	$("#boutonsFiltreTaille").append('<button data-taille="' + tailles[i] + '" type="button" class="btn btn-outline-dark btn-taille mr-2">' + tailles[i] + '</button>');
}

for (var i = 0; i < bottes.length; i = i + 1) {
	// afficher seulement les bottes pour lesquelles la taille est dispo
	var htmlBotte = '<div class="col-3">';
	htmlBotte = htmlBotte + '<div class="card" style="width: 100%;">';
	htmlBotte = htmlBotte + '<img src="' + bottes[i]["imageSrc"] + '" class="card-img-top" alt="' + bottes[i]["imageAlt"] + '" />';
	htmlBotte = htmlBotte + '<div class="card-body">';
	htmlBotte = htmlBotte + '<h5 class="card-title">' + bottes[i]["marque"] + '</h5>';
	htmlBotte = htmlBotte + '<p class="card-text">' + bottes[i]['nom'] + '</p>';
	htmlBotte = htmlBotte + '</div></div></div>';

	$("#produits").append(htmlBotte);
}

// Placer la variable dans le "global scope"
// Vous ferez ceci (extraire la variablie) pour la taille et la couleur
var tailleCliquee;

// 3. Écriture d'algorithmes dynamiques (qui se servent des données modélisées)
// On observe le clic sur les boutons de taille
$(".btn-taille").on("click", function() {
	// On récupère la taille stockée dans l'attribut data
	tailleCliquee = $(this).data("taille");

	// On donne l'apparence de sélection au bouton de taille venant d'être cliqué.
	// On commence par remettre l'apparence initiale pour tous les boutons
	$(".btn-taille").removeClass("btn-dark"); // couleur arrière-plan pleine
	$(".btn-taille").addClass("btn-outline-dark"); // bordure foncée seulement

	// Puis ensuite, on donne le style "sélectionné" au bouton 
	$(this).removeClass("btn-outline-dark");
	$(this).addClass("btn-dark");

	// Nous allons filtrer les bottes pour lesquelles la taille sélectionnée (cliquée) est disponible
	// Je commence par enlever toutes les bottes du DOM
	$("#produits").html("");

	// Filtre = boucle avec condition à l'intérieur
	for (var i = 0; i < bottes.length; i = i + 1) {
		if (bottes[i]["taillesDispo"].includes(tailleCliquee)) {
			// afficher seulement les bottes pour lesquelles la taille est dispo
			var htmlBotte = '<div class="col-3">';
			htmlBotte = htmlBotte + '<div class="card" style="width: 100%;">';
			htmlBotte = htmlBotte + '<img src="' + bottes[i]["imageSrc"] + '" class="card-img-top" alt="' + bottes[i]["imageAlt"] + '" />';
			htmlBotte = htmlBotte + '<div class="card-body">';
			htmlBotte = htmlBotte + '<h5 class="card-title">' + bottes[i]["marque"] + '</h5>';
			htmlBotte = htmlBotte + '<p class="card-text">' + bottes[i]['nom'] + '</p>';
			htmlBotte = htmlBotte + '</div></div></div>';

			$("#produits").append(htmlBotte);
		}
	}
});

$("#ajout-panier").on('click', function() {
	console.log("La taille sélectionnée est: " + tailleCliquee);
});








