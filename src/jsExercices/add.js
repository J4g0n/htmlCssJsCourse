(function () {
    document.querySelector("#equal").addEventListener("click", function (event) {
        var operand1 = document.querySelector("#op1");
        var operand2 = document.querySelector("#op2");

        var result = parseInt(operand1.value) + parseInt(operand2.value);

        document.getElementById("result").innerHTML = result.toString();
    })
})();
