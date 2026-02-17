// Dans un premier temps, on doit donner un display: none; à la bannière rouge, afin de la masquer
// .hide() est une méthode jQuery qui donne un style display: none;
$("#alerte-sans-rabais-20").hide();

// Dans un deuxième temps, on doit donner un display: block; à la bannière verte, afin de l'afficher
$("#alerte-avec-rabais-20").show();

// Si on voulait ajouter du matériel HTML au lieu de le remplacer, on pourrait se servir du .append()
// Autant pour le .html() que le .append(), on peut spécifier des éléments HTML en les traitant comme chaînes de caractères.
var prenom = "Gregory";
$("#alerte-avec-rabais-20").append("<p>Bonsoir, " + prenom + "</p><p>Comment allez-vous</p>");
