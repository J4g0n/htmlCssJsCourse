var max = function (x) {
    // Fail case at first makes error handler to be indented ~ preconditions
    if (arguments.length < 2) {
        throw new Error("max()  must be invoked with at least two arguments");
    }

    // definitive version (see also apply)
    return Array.prototype.reduce.call(arguments, function (acc, nb) {
        return acc < nb ? nb : acc;
    }, arguments[0]);

    // Mixin yeah don't forget this object must have some properties
    /*arguments.reduce = Array.prototype.reduce;

    return arguments.reduce(function (acc, nb) {
        return acc < nb ? nb : acc;
    }, arguments[0]);*/

    // Normal case
    /*var max = x;

    for (var nb in arguments) {
        if (arguments[nb] > max) {
            max = arguments[nb];
        }
    }

    return max;*/
};

var nb = parseInt(prompt("Saisir un nombre."));
var nb2 = parseInt(prompt("Saisir un deuxième nombre."));
var nb3 = parseInt(prompt("Saisir un troisième nombre."));
var nb4 = parseInt(prompt("Saisir un quatrième nombre."));

confirm("Le maximum est: " + max(nb, nb2, nb3, nb4));


