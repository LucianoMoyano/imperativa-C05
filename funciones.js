const prompt = require("prompt-sync")({ sigint: true });
("------------------------ CLASE FUNCIONES -------------------------");

/*
- ¿Qué Es Una Función?
Una Función es un bloque de código que nos permite realizar una tarea
en particular. Para que la Función se ejecute, "algo" debe invocarla.
Es una herramienta muy útil porque estiliza el código y lo hace más
escalable.

Las Funciones, inicialmente, deben ser definidas y, luego, deben ser
llamadas para que se puedan ejecutar.

*/

// Sintaxis De La Función
 
/* 
// funcion expresada
let funcion = function(){

}

//funcion declarada
function nombreFuncion (){

}

//arrow function
let arrow = ( ) => {}

//crear una funcion y ponerle un nombre o nombrarla
function nombreDeLaFuncion (){
  //los parentesis debe quedar vacios, hasta instanciar los parametros que vamos a utilizar, y luego vamos a abrir las llaves para alojar las instrucciones.
  console.log("Soy un funcion!") //bloque de codigo que se va a ejecutar
}// cerramos la llave

nombreDeLaFuncion() //llamada de la funcion y la ejecución

 */




 

/*
- ¿Qué Es Un Parámetro?*
Un Parámetro es una Variable que creamos al momento de definir una
Función y, cada vez que la ejecutamos, le pasamos un argumento(su
valor) como input.


*/
/* 

function cantarCumple ( persona, persona1 ){
  console.log("que los cumplas feliz")
  console.log("que los cumplas feliz")
  console.log("que los cumplas feliz " + persona + "!")
  console.log("que los cumplas feliz")
}

cantarCumple("Claudia")

//-------------------------

function areaCuadrado (lado){
  console.log(lado * lado)
}
areaCuadrado(3)

 */

/*
- Funciones Con Múltiples Parámetros
Podemos ejecutar las Funciones pasándoles todos los Parámetros que necesitemos.

Sintaxis De Las Funciones Con Múltiples Parámetros
Debemos separar los Parámetros con una coma.
  */
/* 
function areaTriangulo (base, altura){
  console.log((base * altura) / 2)
}

areaTriangulo(2, 5 ) // importante: el orden de los argumentos, puede afectar el resultado


//--------------------

function saludarTres(nombre1, nombre2, nombre3){
  console.log("Hola " + nombre1)
  console.log("Hola " + nombre2)
  console.log("Hola " + nombre3)
}

saludarTres("Ron", "Harry", "Hermione") 
saludarTres("Hermione", "Ron", "Harry")
 */




/*
- Funciones Con Variables Por Parámetro
El Parámetro que le pasemos a una Función también puede ser un valor
guardado en una Variable.

al ejecutar una Función que lleve un input, podemos pasarle una
Variable como Parámetro. Por ejemplo:
*/

function cantarCumple1 (persona){
  console.log("QUe los cumplas feliz " + persona + "!")
}

let nombre = prompt("Cual es tu nombre?: ")
cantarCumple1(nombre)






/*
- Parámetros Por Default
Los Parámetros Por Default permiten que los Parámetros de una Función
sean definidos con un valor inicial.

Ejemplo:
*/

//Para asignar un valor por default a un parametro, tenemos que agregar el simbolo =, sguido del valor despues del parametro
function multiplicacion (a, b = 2, c){
  console.log( a * b )
}

multiplicacion(5, 3) //si agregamos el valor como argumento, va a estar pisando el valor que le agregamos por default

//------------------------------

let suma = ( a, b = 0 ) => {
  return a + b
}

console.log(suma()) // Nan
console.log(suma(3)) // 3










/*
- La Keyword return
La keyword return se usa al declarar una Función para devolver un
valor específico de ella. Esto sucede para guardar ese valor en una
Variable o usarlo por fuera del bloque de definición de la Función.

Importante: Al usar esta palabra reservada se da por finalizada la
ejecución de la Función, independientemente de la extensión del bloque
de código.

ejemplo:
*/

/* function cuadrado (numero){
  console.log(numero * numero)
}

cuadrado(4) // 16
console.log("El resultado de 4 al cuadrado es: " + cuadrado(4)) //
 */


/* function cuadrado (numero){
  return numero * numero 
}

console.log(cuadrado(4)) // 16
console.log("El resultado de 4 al cuadrado es: " + cuadrado(4)) */ //16

function valor (a, b, c){
  console.log(a)
  return b * c
  console.log(b)
}
console.log(valor(15, 20, 25))


/*
- Arrow Functions 🏹
Las Arrow Functions son una alternativa a la función clásica. Estas
son incorporadas a partir de ES6 y se ven a menudo en dferentes
ejemplos de internet.

Una de sus ventajas es que su sintaxis es más compacta y flexible que
las Funciones clásicas creadas con function.

*/
// Función Clásica

function sum (a, b){
  return a + b
}
console.log(sum(2,4))


/*    
Sintaxis
Las Arrow Functions se componen de 3 partes:

Los parámetros entre paréntesis, en este caso (a,b).
Del lado derecho de los parámetros, un Token (=>).
Por último, las llaves donde dentro estarán las acciones que se deban
ejecutar. */
// Arrow Function


/* Las Arrow Functions son muy flexibles a la hora de codear. Su
sintaxis se puede adaptar a cada caso.
 */
//1-
let sum = (a, b) => { return a + b}

//2-
let sum = (a, b) =>  a + b

//3- cuando utilizamos un solo parametro tampoco vamos a necesitar de los parentesis ()

let resta = a =>  a - a

//Ejercicios resueltos!

/* Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros. */

function pulgadasACm(pulgadas) {
  return pulgadas * 2.54;
}
pulgadasACm(5);

/* Crear una función que recibe un string y lo convierte en una URL. 
ej: “pepito” es devuelto como “http://www.pepito.com”
 */

function url(string) {
  return "http://www." + string + ".com";
}
url("pepito");

/* Crear una función que recibe un string y devuelve la misma frase pero con admiración. */

function admirador(palabra) {
  return palabra + "!!!";
}
admirador("Bienvenidos");

/* Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos. */

function edadPerro(edadHumano) {
  return edadHumano * 7;
}
edadPerro(27);

let edadPerro = (edadHumano) => edadHumano * 7;
edadPerro(27);

/* Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
PD: considera que tu mes de trabajo tiene 40 horas. */

function valorHora(sueldo) {
  return sueldo / 40;
}
valorHora(1500);

/* Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el imc de una persona.  Luego, ejecutar la función probando diferentes valores. */

function imc(peso, altura) {
  return peso / (altura * altura);
}
imc(75, 1.73);

let imc = (peso, altura) => peso / (altura * altura);
imc(75, 1.73);

/* Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. 
Investiga que hace el método de strings .toUpperCase() */

function mayus(string) {
  return string.toUpperCase();
}
mayus("hola como estan?");

/* Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. 
pista: te servirá revisar que hace la palabra reservada typeof. */

function tipoDeDato(dato) {
  return typeof dato;
}
tipoDeDato(false);
tipoDeDato(27);
tipoDeDato("Nancy");

/* Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.
Pista: Investiga si el objeto Math tiene entre sus propiedades el número Pi */

function circulo(radio) {
  return Math.PI * radio * 2;
}
circulo(2);
