<?php 

// Reprenons la démonstration du cours 10, où on présente les derniers cours
// auxquels un client a participé.

// Définition du tableau des titres de cours
$titres = [
	"Yoga flow",
	"Pilates",
	"Hyrox"
];
// var_dump($titres);

// Mettons en place une boucle pour afficher tous les titres (sans HTML pour débuter)
// Nous commenterons cette section par la suite


// En JavaScript, nous avons vu la boucle for, qui ressemble à:
// for (var i = 0; i < titres.length; i = i + 1) {
// 	console.log(titres[i]);
// }

// en PHP
// foreach ($titres as $titre) {
// 	echo "$titre ";
// }

// Effectuons l'inclusion du fichier d'affichage
include 'app.html.php';

?>
