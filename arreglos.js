/* Arreglos

Un Arreglo (del inglés Array) es una colección ordenada de elementos que identificamos mediante Índices.

es un conjunto de datos que se encuentran ordenados. Como vimos previamente, en JavaScript, los datos pueden ser de cualquier tipo (Números, Strings, Funciones, etc.).

Gracias a los Arreglos, podemos reunir en un solo lugar los distintos tipos de datos, sin necesidad de crear una Variable para cada uno. Veamos un ejemplo:

Imaginemos que queremos agrupar los productos existentes en un e-commerce:

Si no usáramos Arreglos deberíamos crear una Variable que guarde el valor de cada elemento. */

//CODIGO

/* 
let productos1 = "auriculares"
let productos2 = "celulares"
let productos3 = "televisores"
 */


/* 
Volviendo al ejemplo, como sabemos que todos estos elementos pertenecen a la misma categoría, porque son productos del e-commerce, podríamos escribir un Arreglo que los agrupe en una lista: */

//CODIGO




//let productos = ["auriculares", "televisores", "celulares"]



/* 
Strings Como Colecciones De Caracteres

Los Strings son cadenas de caracteres guardadas en direcciones de memorias continuas. Podemos acceder a cada letra usando corchetes ([]) y un Índice (un número que indica la posición del caracter).

La propiedad length nos permite tomar dimensión de la magnitud de un String. Es decir, nos ayuda a contar la cantidad de caracteres que hay en esa cadena.

Si queremos acceder rápidamente a la propiedad length de un String, debemos escribir directamente la cadena de caracteres (o la Variable que la guarda) seguida por ".length". Por ejemplo: variable.length.

Teniendo en cuenta este ejemplo del String hello, pensá qué devuelve cada sentencia sin probarlo en la consola:
*/

//CODIGO

/* let word = "hello"

word[0] //h
word[3] //segunda l
word[5] //undefined
word[4] // o
 */



//¿Qué devolverá si le pasamos una Variable?

//CODIGO

/* let index = 3

word[index] // segunda l

 */

//Importante: Para saber la cantidad de caracteres que tiene un String debemos restarle 1 a la variable largoDelString. Esto se debe a que la longitud de la cadena de caracteres es siempre 1 mayor que el último Índice.



/* let largoDelString = word.length 
word[largoDelString] // undefined
let largoDelString = word.length -1
word[largoDelString] // o

 */







/* 
Índice De Un Arreglo En JavaScript

los Arreglos nos permiten agrupar datos en una lista ordenada. Por lo tanto, cada elemento ocupa una posición indexada numéricamente.

Por ejemplo:
*/

//CODIGO

//let amigos = ["Juan", "Pepe", "Jorge", "Francisco"]

/*
... cada uno de ellos tiene un Índice:

Juan Pepe Jorge Francisco
0	  1	    2       3

*/

//CODIGO


/* amigos[2] //Jorge
amigos[1] //pepe
amigos[3] //francisco
amigos[amigos.length] // undefined
amigos[amigos.length - 1] // francisco
 */
/* 
Podemos usar los Índices para:

Actualizar un valor: */

//CODIGO

/* let amigos = ["Juan", "Pepe", "Jorge", "Francisco"]


amigos[0] = "Juancito"
amigos[3] = "Pancho"
console.log(amigos)
 */



//Agregar nuevos elementos:

//CODIGO

let amigos = ["Juan", "Pepe", "Jorge", "Francisco"]

amigos[4] = "Marco" //agregamos una nueva posicion 
amigos[5] = "Mateo" //agregamos una nueva posicion 

//como quedaria el arreglo nuevo ["Juan", "Pepe", "Jorge", "Francisco", "Marco", "Mateo"]


console.log(amigos)









//¿Qué pasaría si agrego un nuevo amigo en el Índice 10?

//CODIGO

/* let amigos = ["Juan", "Pepe", "Jorge", "Francisco", "Marco", "Mateo"];

amigos[10] = "Nicolas"; //le agregamos en la posicion numero 10 el nombre Nicolas

// como quedaria el arreglo: ["Juan", "Pepe", "Jorge", "Francisco","Marco", "Mateo", empty * 4 , "Nicolas"]

amigos(11)[
  ("Juan", "Pepe", "Jorge", "Francisco", "Marco", "Mateo", empty * 4, "Nicolas")
]; */
//los indices del 6 al 9 quedarian vacios porque nos salteamos todas esas posiciones, agregando la posicion numero 10


//Ejemplo con un arreglo con diferentes tipos de datos: 


let coleccionRandom = [
  "Hola",
  22,
  true,
  null,
  function luciano (){
    console.log("Hola como estan?")
  },
  ["Hola", "chau"]
]

console.log(coleccionRandom[4]())
coleccionRandom[5]
coleccionRandom[5][0] // hola










//("------------------------------------------------------");
//¿Qué devuelve este console.log?

 let numbers = [22, 33, 54, 66, 72];

console.log(numbers[numbers.length]); //undefined
console.log(numbers[numbers.length - 1]) //72 

 



//¿Qué personaje se muestra en la consola?

 let grupoDeAmigos = [
  ["Harry", "Ron", "Hermione"],
  ["Spiderman", "Hulk", "Ironman"],
  ["Penélope Glamour", "Pierre Nodoyuna", "Patán"],
];
console.log(grupoDeAmigos[2][0]); //Penélope Glamour
console.log(grupoDeAmigos[0][3]) //undefined
console.log(grupoDeAmigos[1][2]) //ironman
 