var p = document.createElement("p");
p.appendChild(document.createTextNode("La DOM est une API !"));

var body = document.body;
body.appendChild(p);

var h1 = document.createElement("h1");
h1.innerHTML = "<i>Mon super <abbr title='Document Object Model'>DOM</abbr></i>";

body.insertBefore(h1, p);

p.setAttribute("title", "Description");