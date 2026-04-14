<?php 

$panier = [
	"t-shirt",
	"chandelles",
	"bas",
	"casquette"
];

// Pour accéder aux éléments en utilisant le tableau + un index,
// on utilise la même syntaxe qu'en JS
echo $panier[0];
echo "<br>";
echo $panier[1];
echo "<br>";
echo $panier[2];
echo "<br>";
echo $panier[3];
echo "<br>";

// Nous verrons la boucle au cours 12
// foreach ($panier...) {
// 	...
// }

// D'ici à ce que nous voyons la boucle, voici une fonction
// pratique pour "débugger" (faire un diagnostic)
var_dump($panier);
echo "<br>";

var_dump(true);
echo "<br>";
var_dump(false);
echo "<br>";

// Pour modifier un élément, on utilise également la même syntaxe
// qu'en JS
$panier[0] = "chandail";
var_dump($panier);
echo "<br>";

// Si on veut ajouter un élément à notre tableau
// l'équivalent en JS est: .push()
$panier[] = "cravate";
var_dump($panier);
echo "<br>";

// Quantité d'éléments
// l'équivalent en JS: .length
echo count($panier);

?>







