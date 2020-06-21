let supdiv = document.getElementsByClassName("content");
let marcador = document.createElement("h1");
let body = document.getElementsByTagName("body");
let subdiv;
let dentro;
let tubo1 = [];
let tubo2 = [];
let tubo3 = [];
let matriz = [];
matriz.push(tubo1,tubo2,tubo3);
let i;
let comp1= 0;
let comp2 = 0;
let contador = 0;
let nuevo;
let back1;
let back2;
let dificultad = 5;

function movimiento ()
{
  contador ++;
  let origen = prompt("¿De qué torre quieres mover?")
  let destino = prompt("¿A qué torre moverás?")

  if ((origen == 1 || origen == 2 || origen ==3) && (destino == 1 || destino == 2 || destino ==3))
  {
    if (origen == 1)
    {
      comp1 = tubo1.pop();
    }
    else if (origen == 2)
    {
      comp1 = tubo2.pop();
    }
    else if (origen == 3)
    {
      comp1 = tubo3.pop();
    }
    /* Obtencion de valores*/

    if (destino == 1 && origen != 1)
    {
      if (tubo1.length == 0) {
        comp2 =0;
      }
      else
      {
        comp2 = tubo1.pop();
      }
    }
    else if (destino == 2 && origen != 2)
    {
      if (tubo2.length == 0) {
        comp2 =0;
      }
      else
      {
        comp2 = tubo2.pop();
      }
    }
    else if (destino == 3 && origen != 3)
    {
      if (tubo3.length == 0)
      {
        comp2 = 0;
      }
      else
      {
        comp2 = tubo3.pop();
      }
    }
    else
    {
      comp2="no";
    }


    /* Verificacion de movimiento*/
    if (comp2 == "no")
    {
      alert("Movimiento inválido, estás moviendo una pieza a su mismo lugar");
      back1 = origen -1;
      matriz[back1].push(comp1);

    }
    else if ((!comp1 && comp2==0))
    {
      alert("¡No puedes mover algo que no existe!")
    }

    else if (comp2>comp1 || comp2 ==0)
    {
      nuevo = destino -1;

      if (comp2 == 0)
      {
        matriz[nuevo].push(comp1);
      }
      else
      {
        matriz[nuevo].push(comp2,comp1);
      }
    }
    else
    {
      alert("Movimiento inválido, no puedes colocar un disco más de mayor tamaño sobre uno de menor tamaño.");

      if (comp2 && comp1)
      {
        back1 = origen -1;
        back2 = destino-1;
        matriz[back1].push(comp1);
        matriz[back2].push(comp2);
      }
      else if (comp1 && !comp2)
      {
        back1 = origen -1;
        matriz[back1].push(comp1);
      }
      else if (comp2 && !comp1)
      {
        back2 = destino-1;
        matriz[back2].push(comp2);
      }
    }
  }
  else
  {
    alert("Introduce coorectamente tus valores");
  }

  for (var g = 1; g <= dificultad; g++)
    {
      g = g.toString();
      let padre = document.getElementById("tubo1");
      let her = document.getElementById("1"+g);
      padre.removeChild(her);
      let novo = document.createElement("div");
      novo.setAttribute("id",1+g);
      novo.setAttribute("class","vacio");
      padre.appendChild(novo);
    }
    for(valor of tubo1)
    {
      valor = valor.toString();
      i = i.toString();
      coor = 1+i;
      let disc = document.getElementById(coor);
      disc.classList.remove("vacio");
      disc.classList.add("disco"+valor);
      i--;
    }

    i=dificultad;

    for (var g = 1; g <= dificultad; g++)
    {
      g = g.toString();
      let padre = document.getElementById("tubo2");
      let her = document.getElementById("2"+g);
      padre.removeChild(her);
      let novo = document.createElement("div");
      novo.setAttribute("id",2+g);
      novo.setAttribute("class","vacio");
      padre.appendChild(novo);
    }
    for(valor of tubo2)
    {
      valor = valor.toString();
      i = i.toString();
      coor = 2+i;
      let disc = document.getElementById(coor);
      disc.classList.remove("vacio");
      disc.classList.add("disco"+valor);
      i--;
    }
      i=dificultad;

    for (var g = 1; g <= dificultad; g++)
    {
      g = g.toString();
      let padre = document.getElementById("tubo3");
      let her = document.getElementById("3"+g);
      padre.removeChild(her);
      let novo = document.createElement("div");
      novo.setAttribute("id",3+g);
      novo.setAttribute("class","vacio");
      padre.appendChild(novo);
    }
    for(valor of tubo3)
    {
      valor = valor.toString();
      i = i.toString();
      coor = 3+i;
      let disc = document.getElementById(coor);
      disc.classList.remove("vacio");
      disc.classList.add("disco"+valor);
      i--;
    }
    i=dificultad;

  if (tubo3.length != dificultad)
  {
    console.log(tubo3.length);
    window.setTimeout(movimiento,1000);
    marcador.innerText = "Número de movimientos = " + contador;
    body[0].appendChild(marcador);
  }
  else
  {
    body[0].removeChild(marcador);
    let ganador = document.createElement("h1");
    ganador.innerText = "¡Felicidades! Has logrado el objetivo. El total de movimiento fue de " + contador;
    body[0].appendChild(ganador);
    console.log(1234);
  }
}


if (contador == 0)
{
  for (var a = 1; a <=dificultad ; a++)
  {
    tubo1.push(a)
  }
  tubo1.reverse();

  i = dificultad;

  for (var c = 1; c <= 3; c++)
  {
    c=c.toString();
    mastil = document.createElement("div");
    mastil.setAttribute("class","tubo");
    subdiv = document.createElement("div");
    subdiv.setAttribute("class", "content3")
    subdiv.setAttribute("id","tubo"+c);
    subdiv.appendChild(mastil);
    supdiv[0].appendChild(subdiv);
    for (var j = 1; j <= dificultad; j++)
    {
      dentro = document.getElementById("tubo"+c)
      if (c==1)
      {
        j=j.toString();
        hijo = document.createElement("div");
        hijo.setAttribute("class", "disco"+j)
        hijo.setAttribute("id",c+j);
        dentro.appendChild(hijo);
      }
      else
      {
        j=j.toString();
        hijo = document.createElement("div");
        hijo.setAttribute("class", "vacio");
        hijo.setAttribute("id",c+j);
        dentro.appendChild(hijo);
      }
    }
  }
  setTimeout(movimiento,1000);
}
