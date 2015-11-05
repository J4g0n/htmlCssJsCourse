/*var curryAdd = function (y) {
    return function (x) {
        return x + y;
    };
};

alert(curryAdd(3)(5));*/

(function () {
    window.addEventListener("DOMContentLoaded", function () { // useless with defer
        var lien = document.querySelector("a");
        lien.addEventListener("click", function (event) {
            var ok = confirm("Aller sur " + event.target.innerHTML + "?");

            if (!ok) {
                event.preventDefault();
            }
        });
    });
})();