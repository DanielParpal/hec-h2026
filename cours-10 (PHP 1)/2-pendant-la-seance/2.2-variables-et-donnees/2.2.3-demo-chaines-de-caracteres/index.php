<?php 

$prenom = 'Daniel';

// Si on utilise des guillemets simples, la variable est traitée comme du texte
echo 'Bonsoir, $prenom';
echo "<br>";

// Si on utilise des guillemets doubles, la variable est interpolée (interprétée)
// Ceci est différent du JS
echo "Bonsoir, $prenom";
echo "<br>";

// On peut faire la concaténation (rare mais utile à savoir)
// équivalent du + en JS
echo "Bonsoir, " . $prenom;

?>
