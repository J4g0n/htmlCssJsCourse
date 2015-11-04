var fact = function (n) {
    var res = 1;

    while (n > 0) {
        res = res * n;
        n = n-1;
    }

    return res;
};

var factRec = function (n) {
    if (n < 2) return 1;
    else return n * factRec(n-1);
};

var factTail = function (n) {
    var factTailRec = function (n, acc) {
        if (n < 2) return acc;
        else return factTailRec(n-1, acc * n);
    };
    return factTailRec(n, 1);
};

var value = 100;

confirm("Fact 100: " + fact(value));
confirm("FactRec 100: " + factRec(value));
confirm("FactTail 100: " + factTail(value));
