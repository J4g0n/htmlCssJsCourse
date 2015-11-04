(function () {
    window.addEventListener("DOMContentLoaded", function () {
        document.getElementById("equal").addEventListener("click", function (event) {
            var operand1 = document.querySelector("op1");
            var operand2 = document.querySelector("op2");
            var result = operand1.value + operand2.value;

            alert(result);
        });
    });
})();