<?php 

// Avant d'envoyer la 1ère requête à la base de données,
// on doit établir la connexion entre les serveurs
include 'db/connexion-MySQL.php';

// Sélectionner les données de ma table des publications
include 'db/select-publications.php';

// On affiche les données (pour l'instant de manière simple)
// var_dump($publications);

// On inclut le fichier d'affichage
include 'views/app.html.php';

?>