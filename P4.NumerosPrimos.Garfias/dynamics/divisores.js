let divisores = [];
let divisoresPrimos= [];
let prueba = [];
let numero = prompt("¿De qué numero quieres conocer sus factores primos?")
let verificador = 1;
let divisor = 2;

if (numero > 1)
{
/*Obtengo los divisores del número en cuestión*/
for (var i = 1; i <= numero; i++)
{
    residuo = numero % i;
    if (residuo == 0)
    {
      divisores.push(i);
    }
}
/*Evaluo que sean primos. Para obtener los factores primos.*/
for (var m = 0; m < divisores.length; m++)
{
    evaluar = divisores[m];

    while ((evaluar % divisor) != 0 && (divisor <= evaluar) && (evaluar >= 2))
    {
        divisor +=1;
    }
    if (divisor == evaluar)
    {
      divisoresPrimos.push(evaluar);
    }
  divisor=2;
}

alert("Los divisores primos de " + numero + " son: \n" + divisoresPrimos);

}
else
{
    alert("Ingresa un número válido (Mayor a 1)")
}
