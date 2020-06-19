var elevadorA = prompt("¿En dónde está el elvador A?");
console.log(elevadorA);
var elevadorB = prompt("¿En dónde está el elvador B?");
console.log(elevadorB);
var gama = prompt("¿Dónde está Gama?");
console.log(gama);

var distancia1 = elevadorA-gama;
var distancia2 = elevadorB-gama;

if (distancia1 < 0)
{
    distancia1 *= -1;
}

if (distancia2 < 0)
{
    distancia2 *= -1;
}

if (distancia1 < distancia2)
{
  alert("Gama debe tomar el elevador A");
}
else if (distancia2 < distancia1)
{
  alert("Gama debe tomar el elevador B");
}
else if (distancia1 == distancia2)
{
  alert("Gama puede tomar cualquiera de los 2 elevadores");
}
