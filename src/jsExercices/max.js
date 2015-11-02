var max = function (x, y) {
    return x <= y ? y : x;
};

var nb = parseInt(prompt("Saisir un nombre."));
var nb2 = parseInt(prompt("Saisir un deuxième nombre."));

confirm("Le maximum est: " + max(nb, nb2));

