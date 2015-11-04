var max = function (array) {
    if (array.length <= 0) {
        throw new Error("don't invoke this function with an empty array!");
    }

    var head = array[0];
    var tail = array.slice(1, array.length);
    return tail.reduce(function (acc, nb) {
        return acc < nb ? nb : acc;
    }, head);
};

var array = [5, 14, 8, 2, 17, 9, 12];

confirm("Le maximum est: " + max(array));


