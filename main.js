const prompt = require("prompt-sync")({ sigint: true });

// comentario de linea

/* 

comentario
de
multilinea

*/

/* 
Variables: Es un contenedor(una caja de carton) que guarda información para poder usarla mas adelante. Podemos escribir variables con let, var, const

var: Es una forma  mucho mas flexible a la hora de crear variables, ya que nos permite redeclarar y modificar su valor existente

*/

if(true){
    var palabra = "Suscribite" 
}

console.log(palabra)

/* 

let: Permite actualizar o modificar una variable, pero no volver a crearla con el mismo nombre.

*/

if(true){
    let palabra = "Suscribite"
}
 console.log(palabra)

/* 
let persona = "Luciano";
persona = "Tiziano"; */

/* 

const(constante): Permite crear una variable con un nombre y un valor, pero no nos deja redeclararla o modificar ese valor del principio. Esta pensado para que una vez que creemos un valor a la constante, no se pueda modificar tanto se este ejecutando el codigo

*/

//const juego = "Mario Karts";

/* 
Tipos de datos

Primitivos: string, number, boolean, undefined, null, NaN
Complejos: Array, Objeto, Funcion


Strings: Son cadenas de caracteres que incluyen letras, numeros, espacios. Se tiene que encerrar mediante comillas simples o comillas dobles o backticks para que JS interprete entienda que es un texto.

number: Funcionan igual que en las matematicas. Pueden ser numeros enteros y numeros racionales. Se pueden suar, restar, multiplicar y dividir y van a seguir una logica de resolucion, que va a privilegiar a las operaciones que esten dentro de los parentesis.

boolean: Son datos de tipo true (verdaderos) y false (falso), es decir, que activan o esactivan parte del programa que se este ejecutnado.

undefined: ES un valor que tiene una variable que todavia no se definidio.

Null: Es un valor que posee una variables que esta explicitamente vacia.


*/
//string
//let nombre = "Angeles5 ";
//number
//let puntaje = 59;
//boolean
//let hayComida = true;
//undefined
//let perro;
//null
//let gato = null;

/* console.log(puntaje);
console.log(hayComida); */

/* 
- Declara 3 variables. Siempre teniendo en cuenta que los nombres deben ser descriptivos:
    Numérica
    String
    Booleana
- Mostrarlas por la consola en 3 console.log distintos (uno por cada variable)
- Ahora modifica tus console.log para que ahora se muestran las 3 variables en el mismo console.log */

//1-
/* let puntos = 10;
let nombre = "Oriana";
let perdioArgentina = false;

//2-
console.log(puntos);
console.log(nombre);
console.log(perdioArgentina);

//3-
console.log(puntos, nombre, perdioArgentina);
console.log(puntos + ", " + nombre + ", " + perdioArgentina);
console.log(`${puntos} , ${nombre}`); */

/* ---------------------------------------- */


/* 

 - Operadores De Comparación En JavaScript

... < ... : Indica que la condición de la izquierda es menor que la de la derecha.
... > ... : Indica que la condición de la izquierda es mayor que la de la derecha.
... >= ... : Indica que la condición de la izquierda es mayor o igual que la de la derecha.
... <= ... : Indica que la condición de la izquierda es menor o igual que la de la derecha.
... == ...: Hace una comparación blanda entre dos valores. Es decir, JavaScript hace una coerción de datos, para que ambos sean del mismo contenido y pueda compararlos.
...===... : Indica que la condición de la izquierda tiene una igualdad estricta respecto a la de la derecha. Es decir, evalúa que el contenido y el tipo de dato sea el mismo. Al usar este comparador evitarás bugs a futuro.

Ejemplos: 
let respuestaUsuario = prompt("cuantos años tenes?") //= 21
parseInt(prompt("cuantos años tenes?")) 
parseFloat(prompt("cuantos años tenes?"))

let edadMaxima = 21


if(edadMaxima == respuestaUsuario){

}

5 == "5" : true
5 === "5" : false


*/

let pregunta = prompt("Indicanos tu nombre: ")
console.log(pregunta)

/*
--------------------------------------------------------------------------------------

¿Qué Diferencia Hay Entre = Y ==?

El = operador de asignacion. Ya que se asigna un valor


En cambio, ==  una comparación blanda

Un  === : seria una comparación estricta

El if si o si recibe una función que devuelva un valor verdadero o falso (1 o 0, true or false, un booleano). No puedes asignar cosas dentro

*/





/* 
Operadores Lógicos Y De Desigualdad En JavaScript: 

todos los operadores lógicos y de desigualdad retornarán valores booleanos. La ventaja de usarlos es que permiten agrupar muchas condiciones y refactorizar el código, haciéndolo más rápido, legible y eficiente.

... || ... : Este operador llamado "o" o or. Nos va a permitir comparar entre 2 o mas condiciones y para que toda la estructura termine siendo verdadera o nos devuelva true, alcanza con que solo 1 de la condiciones termines siendo verdadera 

Ejemplo: 


*/
/* true || true; // La estructura es true 
true || false; // La estructura es true.
false || true; // La estructura es true.
false || false; // La estructura es false.
 */



/*
... && ... : Este operador logico, llamado AND o "y", nos permite comparar entre 2 o mas condiciones y solo basata con que una sola condicion sea falsa para que oda la estructura sea false 


*/
/* true && true; // La estructura es true.
true && false; // La estructura es false.
false && true; // La estructura es false.
false && false; // La estructura es false.
 */

/*

... != ... : Este operador logico(xor), llamado "diferente de.." o "de desigualdad", devuelve true si sus condicione no son iguales; en caso contrario nos devuelve false

*/


/*
let edad = 19
let amigos = 1
let mayorEdad = edad >=18
let acompañado = amigos != 0

if(mayorEdad && acompañado){
    console.log("puede pasar")
} else{
    console.log("no puede pasar")
} */



/*

 - Diferencia Blanda (!=) O Estricta (!==)
Al igual que con los operadores de comparación, la diferencia entre dos valores puede ser blanda o estricta. Mientras que, en la primera, se evaluará solo el contenido, en la segunda se considerará tanto el contenido como el tipo de dato.


- Operador De Negación En JavaScript

Los operadores de negación sirven para escribir código más optimizado, prolijo y elegante.

 ! : niega el valor booleano de cada dato. Es decir que si una condicion es true, al negarlo con el simbolo "!", va a pasar a ser false


!true = false
!false = true
!!false = false
!!true = true
!!1 = true
!0 = true
!!0 = false 
!"" = true
!" " = false


*/



console.log("------------------------------------------------------");

/* 
- Tomémonos un rato para armar las variables de los ejercicios 1 y 2 de esta guía. Recuerden guardarlos como archivos separados en la carpeta correspondiente.  
*/

