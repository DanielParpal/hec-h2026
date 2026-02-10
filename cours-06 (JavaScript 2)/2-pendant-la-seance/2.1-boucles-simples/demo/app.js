// La boucle for
// 1, 2, 3, 4, 5
for (var i = 1; i < 6; i = i + 1) {
	console.log(i);
}

console.log("==========");
// i -> 1, 2, 3, 4, 5, la boucle s'arrête lorsque i vaut 6
for (var i = 1; i < 6; i = i + 1) {
	console.log("ABC" + i);
	console.log("DEF" + i);
}

console.log("==========");
// 3, 5 -> 2 exécutions
for (var i = 3; i < 7; i = i + 2) {
	console.log("TEST" + i);
}