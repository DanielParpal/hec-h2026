// 2. Modélisez une recette sous la forme d'objet, et assignez-la à une nouvelle variable nommée recette_A.
var recette_A = {
	titre: "Gâteau épicé à la citrouille avec glaçage au chocolat blanc",
	description: "Mordez dans l'automne à pleines dents! Vive la citrouille!",
	url: "https://www.chocolatsfavoris.com/recettes/gateau-epice-a-la-citrouille-avec-glacage-au-chocolat-blanc"
};

// 3. Affichez votre objet dans la console.
console.log(recette_A);

// 4. Affichez le titre de votre recette dans la console.
console.log(recette_A["titre"]);

// 5. Affichez sa description.
console.log(recette_A["description"]);

// 6. Modélisez une autre recette sous la forme d'objet, et assignez-là à une nouvelle variable nommée recette_B.
var recette_B = {
	titre: "Tarte ganache clémentine et chocolat noir",
	description: "La saison des clémentines n'aura jamais été aussi savoureuse!",
	url: ""
};

// 7. Affichez votre objet dans la console.
console.log(recette_B);

// 8. Mettez en place une condition
if (recette_B["url"] == "") {
	console.log("Le lien est brisé pour la recette B");
} else {
	console.log(recette_B["url"]);
}





