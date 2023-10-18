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

/* var edad = 5;

var edad = 3; */

/* 

let: Permite actualizar o modificar una variable, pero no volver a crearla con el mismo nombre.

*/
/* 
let persona = "Luciano";
persona = "Tiziano"; */

/* 

const(constante): Permite crear una variable con un nombre y un valor, pero no nos deja redeclararla o modificar ese valor del principio. 

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
let puntos = 10;
let nombre = "Oriana";
let perdioArgentina = false;

//2-
console.log(puntos);
console.log(nombre);
console.log(perdioArgentina);

//3-
console.log(puntos, nombre, perdioArgentina);
console.log(puntos + ", " + nombre + ", " + perdioArgentina);
console.log(`${puntos} , ${nombre}`);
