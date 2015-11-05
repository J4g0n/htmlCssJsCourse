var number =  Math.floor(Math.random()*10) + 1;
var nbTry = 3;
var gameOver = false;


var generateNewNumber = function () {
    number = Math.floor(Math.random()*10) + 1;
};

var getProposedNumber = function () {
    return parseInt(document.getElementById("proposed-number").value);
};

var updateTryLeftCounter = function () {
    document.getElementById("left-try").innerHTML = nbTry.toString();
};

var removeHints = function () {
    var hints = document.getElementById("hints");
    while (hints.firstChild) {
        hints.removeChild(hints.firstChild);
    }
};

var makeHint = function (proposedNumber) {
    if (proposedNumber === number) {
        return "Gagné !";
    } else if (nbTry === 0) {
        return "Perdu il fallait donner " + number;
    } else if (proposedNumber > number) {
        return "La réponse est inférieur à " + proposedNumber;
    } else {
        return "La réponse est supérieur à " + proposedNumber;
    }
};

var appendHint = function (hint) {
    var liHint = document.createElement("li");
    liHint.innerHTML = hint;
    document.getElementById("hints").appendChild(liHint);
};

var onClickRetry = function () {
    nbTry = 3;
    gameOver = false;
    generateNewNumber();
    updateTryLeftCounter();
    removeHints();
    document.getElementById("proposed-number").value = "";
};

var onClickPropose = function (proposedNumber) {
    if (nbTry === 0 || (number === proposedNumber)) {
        gameOver = true;
    }

    updateTryLeftCounter();
    var hint = makeHint(proposedNumber);
    appendHint(hint);
};

(function () {
    document.getElementById("propose-button").addEventListener("click", function (e) {
        nbTry--;
        var proposedNumber = getProposedNumber(number);
        if (!gameOver && proposedNumber) {
            onClickPropose(proposedNumber);
        }
    });

    document.getElementById("retry-button").addEventListener("click", function (e) {
        onClickRetry();
    });
})();
