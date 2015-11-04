var max = function (x) {
    var max = x;

    for (var nb in arguments) {
        if (arguments[nb] > max) {
            max = arguments[nb];
        }
    }

    return max;
};

var nb = parseInt(prompt("Saisir un nombre."));
var nb2 = parseInt(prompt("Saisir un deuxième nombre."));
var nb3 = parseInt(prompt("Saisir un troisième nombre."));
var nb4 = parseInt(prompt("Saisir un quatrième nombre."));

confirm("Le maximum est: " + max(nb, nb2, nb3, nb4));


