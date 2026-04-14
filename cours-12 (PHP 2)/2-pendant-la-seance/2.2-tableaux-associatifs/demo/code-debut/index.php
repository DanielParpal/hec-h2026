<?php 

// En JavaScript, les structures clé-valeur sont modélisées avec l'objet, comme ceci
// var coursFitness = {
// 	date: "2026-04-13",
// 	instructeur: "Martha",
// 	titre: "Yoga flow"
// };
// En JS, on utiliserait les crochets carrés pour accéder à une propriété
// console.log(coursFitness["instructeur"]);
// En JS, on utiliserait cette syntaxe pour modifier la valeur d'une propriété
// coursFitness["date"] = "2026-04-15";

// L'équivalent conceptuel PHP est le tableau associatif
$cours_fitness_A = [
	"date" => "2026-04-13",
	"instructeur" => "Martha",
	"titre" => "Yoga flow"
];

// var_dump($cours_fitness_A);

// L'accès aux clés du tableau associatif est fait de la même manière qu'en JS (crochets carrés)
// echo $cours_fitness_A["instructeur"];
// echo "<br>";
// echo $cours_fitness_A["titre"];
// echo "<br>";

// La modification de la valeur d'une propriété est faite de la même manière qu'en JS
$cours_fitness_A["date"] = "2026-04-15";
// echo $cours_fitness_A["date"];
// echo "<br>";

$cours_fitness_B = [
	"date" => "2026-04-16",
	"instructeur" => "Jean",
	"titre" => "Hyrox"
];

// var_dump($cours_fitness_B);

// Inclusion du fichier d'affichage
include 'app.html.php';

?>



