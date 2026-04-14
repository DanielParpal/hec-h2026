<?php 

// 2. Créez la connexion vers votre base de données MySQL, grâce à l'inclusion du fichier 'db/connexion-MySQL.php'
include 'db/connexion-MySQL.php';

// 3. Sélectionnez toutes les données de la table des articles grâce au fichier 'db/select-articles.php'
include 'db/select-articles.php';

// 4a. Trouvez le nom de la variable contenant les données retournées par la requête de sélection, et affichez son contenu grâce à var_dump() dans le fichier index.php.
// 4b. Mettez le var_dump() en commentaire après l'avoir utilisé.
// var_dump($articles);

// 5. Affichez le contenu en incluant le fichier d'affichage 'views/app.html.php'
include 'views/app.html.php';

?>