var number = Math.floor(Math.random()*10) + 1;
var nbTry = 0;

while (nbTry < 3) {
    var saisie = parseInt(prompt("Saisir un nombre."));

    if (saisie === number) {
        confirm("Bien joué, vous avez trouvé !");
        break;
    } else if (saisie < number) {
        confirm("Plus !");
    } else {
        confirm("Moins !");
    }
    nbTry++;
}
if (saisie !== number) {
    confirm("Perdu !");
}
