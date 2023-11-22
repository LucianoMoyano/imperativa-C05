/* 
    EXPLICACIONES OBJETO MATH | METODOS: MAP | FILTER

// OBJETO MATH : 

esta relacionado a las propiedades y metodos de la matematica

este objeto no toma como parametro un arreglo, sino que toma una lista de numeros.
funciona tanto como para numeros negativos, como tambien con numeros decimales



Math.PI; 3.141592653589793 
Math.pow(9, 2); devolvernos el primer numeroi multiplicado tantas veces como indique el segundo parametro - 81
Math.random(); nos devuelve un numero aleatorio entre 0 y 1 (no incluye el uno)
Math.floor(7.9); nos va a devolver el numero pasado por parametro redondeado hacia abajo
Math.ceil(7.1); nos va a devolver el numero pasado por parametro redondeado hacia arriba
Math.max(); nos devuelve el valor mas grande entre los numeros que le pasemos por parametro
Math.min(); nos devuelve el valor mas chico entre los numeros que le pasemos por parametro

*/

let numeros1 = [5, 10, 15, 58, 64, 13, 8];

let maximo = 0;

function encontrarMaximo(array) {
  for (let i = 0; i < array.length; i++) {
    if (maximo < array[i]) {
      maximo = array[i];
    }
  }
  return maximo;
}

console.log("con ciclo for");
console.log(encontrarMaximo(numeros1));

console.log("con Math.max");
console.log(Math.max(5, 10, 15, 58, 64, 13, 8));

console.log("con Math.min");
console.log(Math.min(5, 10, 15, 58, 64, 13, 8));

/* 
MAP: 

("---------------CLASE MAP------------------");

/* 
El METODO MAP
crear un nuevo arreglo con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos. es una pieza fundamental para la programación funcional



SINTAXIS:

arreglo.map(function(elementoActual, indice, arregloOriginal) {  ... código });

map() recibe como parámetro una función la cual recibe 3 parámetros, el elemento actual, indice del elemento actual y el arreglo original.

Sintaxis
var nuevo_array = arr.map(function callback(currentValue, index, array) {
    // Elemento devuelto de nuevo_array
}[, thisArg])

value: El elemento actual del array que se esta procesando
index: El indice actual del array que se esta procesando
array: El array sobre el que se esta produciendo el metodo map
thisArg: ES un valor opcional, podemos usarlo como this al ejecutar la funcion
*/

//EJERCICIOS DE PRUEBA:

/* TRIPLICADOR

Tenemos un arreglo de numeros y necesitamos pasar todos esos numeros elevados a su tercera potencia.

let numeros = [3, 10, 20, 50] => [9, 30, 60, 150]
*/

let numero = [3, 10, 20, 50];

const triplicador = numero.map(function (array) {
  return array * 3;
});
console.log(triplicador);

/* ------------------------------------------------- */
//MULTIPLICADOR
//arrow function

const multiplicador = numero.map((elemento) => elemento * 2);

console.log(multiplicador);

/* 
LISTA DE PRODUCTOS:

Tenemos una lista de productos que comprara un usuario y queremos obtener solamente los nombres de los productos a comprar. 
*/

//Resolviendo con metodo FOR()

const products = [
  { id: "1", name: "Remera", category: "Ropa" },
  { id: "2", name: "Botines de futbol", category: "Zapatillas" },
  { id: "3", name: "Zapatillas", category: "Zapatillas" },
  { id: "4", name: "Camisa", category: "Ropa" },
  { id: "5", name: "Jean", category: "Ropa" },
];

/*   let nameDeProductos = []

  for(let i = 0 ; i < products.length; i++){
    nameDeProductos.push(products[i]["name"])
  }

console.log(nameDeProductos) */

//Resolviendo con metodo MAP()

let nameDeProductos = products.map((elemento) => {
  return elemento["id"];
});

console.log(nameDeProductos);

/*
  dejo la documentación de MDN por si quieren ver mas ejemplos.
  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  */

/* 
  ("-----------------CLASE FILTER---------------");
  /* 
  El metodo Filter() : Nos permite filtrar solo los elementos que nosotros queremos y devolvelos en un nuevo arreglo.
  Es una maquina que va agarrar cada elemento y decide si pasa o no al nuevo arreglo, si algun elemnto noc uenta con ciertas caracteristicas termina siendo descartado.

  
  
  */

//EJERCICIO SIMPLE: mostrar solo las ciudades por consola

const ciudades = ["Madrid", "Buenos Aires", "Nueva York"];

/* const nuevoArreglo = ciudades.filter((ciudad)=>{
  console.log(ciudad)
})

 */

//("-----------------------------------------------");

//Mosatrar solamente las ciudades que tengas mas de 6 caracteres

const arregloNuevo = ciudades.filter((ciudad) => {
  return ciudad.length > 6;
});
console.log(arregloNuevo);

/* ------------------------------------------- */

/* 
  NUMEROS PARES
  Filtrar solamente los numeros pares del siguiente arreglo!
  
  Utils: 
  let numbers = [3, 7, 6, 13, 2, 24, 99];
  */

let numbers = [3, 7, 6, 13, 2, 24, 99];
let numbers2 = numbers.filter((arr) => {
  if (arr % 2 === 0) {
    return arr;
  }
});
console.log(numbers2);

/* 
  EJERCICIO:
  
  Pongamos un ejemplo muy sencillo, de la siguiente lista de números, queremos obtener solamente los mayores que 10.
  
  Utils:
  let numbers = [1,5,23,4,12,45,78,8,8.9,10,11,3.4,10.1,84,6]
  
  
  LO QUE PODRIAMOS HACER DE MANERA SIMPLE SERIA LO SIGUIENTE:
  
  */
//CON FOR LOOP

let numbers1 = [1, 5, 23, 4, 12, 45, 78, 8, 8.9, 10, 11, 3.4, 10.1, 84, 6, 110, 111, 10.2];
/* let numMayorA10 = [];

for (let i = 0; i < numbers1.length; i++) {
  let comparador = numbers1[i];
  if (comparador > 10) {
    numMayorA10.push(comparador);
  }
}
console.log(numMayorA10) */

//("-----------------------------------");

//CON METODO FILTER


let numMayorA10 = numbers1.filter(number => number > 10)

console.log(numMayorA10)



/* ---------------------------------------------------------- */

//Vamos a utilizar el metodo filter para sacar los elementos que se repiten en un array.

const numeros = [1, 2, 3, 4, 3, 1];

const numerosUnicos = numeros.filter((numero, posicion, numeros) => {
  return posicion === numeros.indexOf(numero);
});
/* 
  Explicacion de los 3 parametros:
  numero: hace referencia para cada elemento
  posicion: para las posiciones dentro del array
  numeros: hace referencia al array.
  
  El método indexOf() verifica la posición de un elemento dentro de un Arreglo y nos devuelve su Índice. ⚠️Importante: Si ese elemento no existiera en el Arreglo, nos retornará -1.
  */

/*
  Mover ceros a lo último
  Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y devuelva otro con los números `0` ordenados al final.
  
  Ejemplo: 
  
  moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
  moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0] 
  */

//METODO FILTER

let arreglo = [false,1,0,1,2,0,1,3,"a"]

const moveZero = (arr)=>{

  let sinCeros = arr.filter((elemento)=> elemento !== 0)
  let conCeros = arr.filter((elemento)=> elemento === 0)

  let resultado = sinCeros.concat(conCeros)
  return resultado
}



console.log(moveZero(arreglo))