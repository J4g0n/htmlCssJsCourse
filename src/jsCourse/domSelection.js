var h1 = document.querySelector("h1");
h1.innerHTML = "Salut le monde !";

var pList = document.querySelectorAll("p");
Array.prototype.forEach.call(
    pList,
    function (item) { item.innerHTML = "Changed"; }
);

document.getElementById("message").innerHTML = "Fin !!";
// document.querySelector("#message").innerHTML = "Fin !!";