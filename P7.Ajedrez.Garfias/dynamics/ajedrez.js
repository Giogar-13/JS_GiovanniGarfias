let dimension = prompt("¿De qué dimensión quieres tu tablero?");
if (dimension >= 1)
{
  body = document.getElementsByTagName("body");
  let tabla = document.createElement("table");
  body[0].appendChild(tabla);
  let table =document.getElementsByTagName("table");

  let impar;

  for (var i = 0; i < dimension; i++)
  {
    fila = document.createElement("tr");
    table[0].appendChild(fila);
  }

  let filas = document.getElementsByTagName("tr");
  let now = filas.lenght;

  for (var t = 0; t < dimension; t++)
  {
    if (t%2==0)
      impar = true;
    else
      impar=false;
    for (var m = 0; m < dimension; m++)
    {
      colum = document.createElement("td");
      if (m%2==0)
      {
        if (impar == true)
        {
          colum.setAttribute("class","azul");
        }
        else
        {
          colum.setAttribute("class","naranja");
        }
      }
      else
      {
        if (impar == true)
        {
          colum.setAttribute("class","naranja");
        }
        else
        {
          colum.setAttribute("class","azul");
        }
      }

      filas[t].appendChild(colum);
    }
  }
}
else {
  alert("Ingresa un valor válido")
}
