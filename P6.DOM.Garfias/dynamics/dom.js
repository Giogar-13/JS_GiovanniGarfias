let body = document.getElementsByTagName("body");
let div = document.createElement("div");
div.setAttribute("id","content");
body[0].appendChild(div);
div = document.getElementsByTagName("div");


let enc1 = document.createElement("a");
enc1.innerText="Soy el más grande...";
enc1.setAttribute("href","#");
enc1.setAttribute("id","enc1");

let enc2 = document.createElement("h2");
enc2.setAttribute("id","enc2");
enc2.innerText="Curso Web 2020";

let enc3 = document.createElement("a");
enc3.innerText="Mediano.";
enc3.setAttribute("href","#");
enc3.setAttribute("id","enc3");

let enc4 = document.createElement("p");
enc4.innerText="Jelou";
enc4.setAttribute("id","enc4");

let enc5 = document.createElement("h3");
enc5.innerText="Estoy medio chiquito :(";

div[0].prepend(enc1,enc2,enc3,enc4,enc5);
