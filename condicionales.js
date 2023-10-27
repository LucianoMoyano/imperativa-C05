const prompt = require("prompt-sync")({ sigint: true });
("----------------------CLASE IF - IF/ELSE");

/* 
Las Funciones Condicionales de JavaScript 

son una herramienta que posibilita la toma de decisiones y permite realizar acciones de acuerdo a la entrada de información que reciba. 
 
sentencia if... se usa, principalmente, para tomar decisiones. Permite que, si la condición es verdadera (true), se ejecute un código.

Sintaxis De La Función if...
*/
/* 
if(condicion){
  //el bloque de codigo que se va a estar ejecutando si la condicion es verdadera
} */




/* Sin embargo, la Función Condicional más común es if… else. Con esta, nos aseguramos que, cuando una condición se cumple (es igual a true), retornemos una cosa. Sino (si es false), retornemos otra. */

/* 
Ejemplo. 
*/

/* 
if(condicion){
  //el bloque de codigo que se va a estar ejecutando si la condicion es verdadera
}else{
  //el bloque de codigo que se va a estar ejecutando si la condicion es false
}
 */


/* 
Si hiciéramos una app para evaluar a las personas que llegan a una guardia en un hospital, podríamos escribir el siguiente código que organice la atención de los pacientes en función de su urgencia:
*/
//Ejemplo

/* let temperatura = parseInt(prompt("Ingrese su temperatura: "))

if(temperatura > 37){
  console.log("Prioridad alta")
}else{
  console.log("pririodad baja")
}
 */


/* 
La página Code to Graph te permite pegar tu código para ver cómo es el camino lógico de forma gráfica.

https://crubier.github.io/code-to-graph
*/
("-----------------------------------------");

/* 
Anidar if... else

Las Estructuras Condicionales de tipo if...else pueden anidarse para generar distintos caminos según el input del usuario.


Aspectos Importantes A Tener En Cuenta

El código se lee y ejecuta de arriba para abajo. Por lo tanto, el orden es muy importante a la hora de codear, tanto a la hora de declarar Variables como de generar las Estructuras Condicionales.

Las Estructuras Condicionales de tipo if...else pueden anidarse, unas dentro de otras, para:

- Generar múltiples bifurcaciones en función del objetivo del proyecto.
- Mostrar un único camino lógico a cada usuario.
*/

//Ejemplo:

/* 
let edad = parseInt(prompt("cual es tu edad: "))

if(edad >= 21){
  console.log("Podes inresar al bar")
  let numeroSecreto = 10
  let loQueDiceElUsuario =  parseInt(prompt("cual es el numero secreto: "))
  if(loQueDiceElUsuario === numeroSecreto){
    console.log("Podes ingresar a la fiesta")
  }else{
    console.log("podes ingresar al bar, pero no a la fiesta")
  }
}else{
  console.log("No podes ingresar al bar")
}
 */











/* 
else... if

else... if es un recurso para poder anidar caminos intermedios entre el if y el else final. Una vez que se toma uno de los caminos, se completa el bloque lógico.
*/

//Sintaxis:


/* if(condicion){
  //el bloque de codigo que se va a estar ejecutando si la condicion es verdadera
}else if(condicion2){
  //el bloque de codigo que se va a estar ejecutando si la condicion es verdadera
}else{
  //el bloque de codigo que se va a estar ejecutando si la condicion es false
}
 */





/* 
Siguiendo el ejemplo del bar, si un usuario puede pasar al bar si tiene 18 años, pero no puede tomar alcohol hasta ser mayor de edad a los 21, podríamos escribir el siguiente código: 
*/
//Ejemplo
/* 

let edad = parseInt(prompt("Cual es tu edad: "))

if(edad < 18){
  console.log("No podes ingresar al bar")
}else if(edad >=18 && edad < 21){
  console.log("PUede ingresar al bar, pero no podes tomar alcohol")
}else{
  console.log("Podes ingresar al bar y podes tomar alcohol")
}
 */



/* 
Operador Ternario

El Operador Ternario es una manera de simplificar las estructuras condicionales de tipo If...else para escribirlas en una sola línea.

Sintaxis De Los Operadores Ternarios

Los Operadores Ternarios tienen una estructura con 3 Argumentos:

- Una condición
- Un signo de interrogación (?)
- Los dos caminos posibles, separados por dos puntos (:)

condicion ? lo que se ejecuta si es true : lo que se ejecuta si es false.

*/

//Ejemplo


let numeroTragos = 3

numeroTragos > 1 ? console.log("No podes seguir manejando") : console.log("Podes seguir manejando hasta tu casa")

//Ejemplo 2

let nombre = prompt("Cual es tu nombre? : ")

nombre.length > 3 ? console.log("Respuesta recibida") : console.log("No se recibio ningun nombre")


//Estructura SWITCH

/* 
La estructura condicional Switch() es otra alternativa para la toma de deciciones de nuestro programa.
Es util cuando ya sabemos de antemano cuales son los posibles datos que se vana evaluar
*/
/* switch( condicion o parametro ){
  case 1: //el primer caso que se va a evaluar
  // dependiendo si el caso es el correcto nos devuelve este bloque de codigo

    break // para cortar la ejecucion de los siguientes al encontrar el correcto se corta el progrmaa con el break
    default :
    //Este bloque de codigo se muestra en el caso de no encontrar una conicidencia con los case anteriores
}
 */
//Ejemplo

let num = 2

switch(num){
  case 1:
    console.log("Entramos al caso 1")
    break
  case 2:
    console.log("entramos al caso 2")
    break
  case 3:
    console.log("entramos al caso 3")
    break
    default:
      console.log("Este bloque de codigo se muestra en el caso de no encontrar una coincidencia con los case anteriores")
}




let dia = prompt("Ingrese un numero");

if (dia === "1") {
  console.log("Lunes");
} else if (dia === "2") {
  console.log("Martes");
} else if (dia === "3") {
  console.log("Miercoles");
} else if (dia === "4") {
  console.log("Jueves");
} else if (dia === "5") {
  console.log("Viernes");
} else if (dia === "6") {
  console.log("Sabado");
} else if (dia === "7") {
  console.log("Domingo");
} else {
  console.log("Ingrese un numero del 1 al 7");
}



let dia1 = prompt("Ingrese un numero");

switch (dia1) {
  case "1":
    console.log("Lunes");
    break;
  case "2":
    console.log("Martes");
    break;
  case "3":
    console.log("Miercoles");
    break;
  case "4":
    console.log("Jueves");
    break;
  case "5":
    console.log("Viernes");
    break;
  case "6":
    console.log("Sabado");
    break;
  case "7":
    console.log("Domingo");
    break;
  default:
    console.log("Ingrese un valor de 1 a 7");
}
