var saisie = "";

var isVowel = function (letter) {
    var minVowel = ["a", "e", "i", "o", "u", "y"];
    var maxVowel = minVowel.map(function (vowel) {
        return vowel.toUpperCase();
    });
    var vowels = minVowel.concat(maxVowel);
    return vowels.reduce(function (acc, vowel) {
        return acc || vowel === letter;
    }, false);
};

isConson = function (letter) {
    return letter >= "A" && letter <= "z" && !isVowel(letter);
};

while (true) {
    var saisie = prompt("Saisir une lettre ou le mot 'fin' pour quitter.");
    if (saisie === "fin") {
        break;
    } else if (isVowel(saisie)) {
        confirm("Il s'agit d'une voyelle !");
    } else if (isConson(saisie)) {
        confirm("Il s'agit d'une consonne !");
    } else {
        confirm("Ceci n'est pas une lettre !");
    }
}
alert("Au revoir !");
