// Projetons-nous aux cours 10-12, quand on aura une BD et un backend
// customers -> first_name, last_name -> Gregory Vial

// Délimiteur: guillemets
var prenom = "Gregory"; // cela arriverait du backend
console.log(prenom);

var nomDeFamille = "Vial"; // cela arriverait du backend
console.log(nomDeFamille);

// Concaténation de chaînes de caractères
// Mettre à bout à bout des morceaux de texte
console.log("Bonsoir, " + prenom + " " + nomDeFamille);

// Guillemets simples OK aussi
var nomItem = 't-shirt';
console.log(nomItem);

// On peut utiliser les guillemets de manière stratégique
// On peut aussi utiliser l'échappement (rare)
console.log('J\'ai dit: "Bonsoir!"');
