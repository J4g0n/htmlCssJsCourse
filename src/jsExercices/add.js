(function () {
    window.addEventListener("DOMContentLoaded", function () {
        document.querySelector("#equal").addEventListener("click", function (event) {
            var operand1 = document.querySelector("#op1");
            var operand2 = document.querySelector("#op2");
            console.log(operand1.value);
            console.log(operand2.value);

            var result = parseInt(operand1.value) + parseInt(operand2.value);

            document.getElementById("result").innerHTML = result.toString();
        });
    });
})();