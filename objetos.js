("-----------------------------------CLASE DE OBJETOS------------------------");

/* 
Pensando en nuestro dia a dia , cuando hablamos de un objeto en particular, ya sea una mesa, no hablamos de una lista ordenada, sino de una lista de propiedades. 
Por ejemplo, una mesa tiene una altura, un color , un material, ... No importa el orden de la propiedades, sino el nombre de las mismas. Por eso es que en este caso, no usamos arreglos, el orden deja de ser importante para acceder a los valores.

El como accedo a los valores en un arreglo difiere a como accedo en los objetos.  

Se declara con la apertura y cierre de las { } , tanto con o sin las proiedades dentro. 


//sintaxis


let nombreObjeto = {
  propiedad1: valor1,
  propiedad2: valor2
}




*/

//CODIGO:


/* let persona = {
  nombre: "Luciano",
  apellido: "Moyano",
  edad:27,
  estaVivo: true,
  mascotas: ["Limon", "pepe", "ruffo"],
  grupoFamilia: {
    papa: "Marcelo",
    mama: "Nancy"
  }
}
 */


/*


-----------DOT NOTATION VS BRACKET NOTATION--------------

Hay dos maneras de acceder a los valores de un Objeto en JavaScript:

Bracket notation (del inglés Notación por corchetes)
Dot notation (del inglés Notación por punto)

Al igual que cuando almacenamos otros tipos de datos en las variables, podemos cambiar los valores de las propiedades del objeto en cualquier momento durante un programa, al usar la notación de punto o de corchetes:

BRACKET NOTATION => nombreObjeto["nombre propiedad"]

DOT NOTATION => nombreObjeto.nombrePropiedad  

----------- Ventajas Y Limitaciones-------------

Si bien Dot notation es más cómodo y rápido de escribir, es un poco más limitado porque:

1. No acepta Variables.

Por ejemplo, si escribiéramos auto.propiedad, va a buscar el texto "propiedad" de forma literal.

Cuando utilicemos loops con Variables que cambien de valor, se va a notar más este problema.

2. No nos permite acceder a Propiedades que tengan números al principio o espacios.

-------------- Modificar Objetos -----------------

Para modificar las Propiedades de un Objeto se puede realizar tanto con Bracket como Dot notation.

*/
//CODIGO


/* let heroe = {
  nombre: "Mario",
  trabajo: "Plomero"
}
 */

//Si quisiéramos modificar el nombre (y reemplazar "Mario" por "Luigi"), podríamos hacer lo siguiente:

//Dot notation. //CODIGO

//heroe.nombre = "Luigi"

//Bracket notation. //CODIGO

/* heroe["nombre"] = "Bowser"
console.log(heroe) */
/*
---------------- Agregando Propiedades A Un Objeto -------------------

si quisiéramos agregar la nacionalidad del Objeto heroe, podríamos hacerlo utilizando Bracket o Dot notation.

Hasta ahora, la Propiedad nacionalidad no existe (y devolvería undefined). Entonces, podríamos declararla de las siguientes formas:

*/

//Dot notation. //CODIGO

//heroe.nacionalidad = "Italiano"


//Bracket notation. //CODIGO

/* heroe["nacionalidad"] = "Colombiano"
console.log(heroe)
 */
/*
------------ ELIMINANDO UNA PROPIEDAD -----------------

Si quisieramos eliminar una propiedad entera, tanto su key como su valor podemos usar la palabra reservada delete : 

delete arreglo.key --> dot notation 
delete arreglo["key"] ---> bracket notation 
 */

/* delete heroe.nacionalidad
console.log(heroe) */

/*

----------------- Objetos Dentro De Arreglos --------------------

Podemos acceder a los Objetos dentro de Arreglos a través de Bracket o Dot notation.

Realizar un ejemplo donde se propone crear el objeto de un auto. Debe tener un arreglo llamado partes.
*/

//CODIGO


/* let auto = {
  marca: "Ford",
  modelo: "Fiesta",
  kilometraje: 0,
  nuevo: true,
  arrancar: function(){
    console.log("el auto esta encendido")
  },
  partes: [
    {nombre: "bateria", estado: "nuevo"},
    {nombre: "motor", estado: "nuevo"}
  ]
}
 */



// Utilizando Dot notation nos devuelve el Arreglo partes

//CODIGO
/* 
auto["partes"]
auto.partes
/* {nombre: "bateria", estado: "nuevo"},
    {nombre: "motor", estado: "nuevo"} 

auto["partes"][0]
auto.partes[0]
//{nombre: "bateria", estado: "nuevo"},

auto["partes"][0]["nombre"]
auto.partes[0].nombre
//bateria

 */




/* 
 EJERCICIO ECOMMERCE

Creando Stock del Ecommerce de Luciano:

Luciano se incorporo a la empresa y nos pide que le creemos su primer stock con su precio correspondiente y la cantidad de articulos que nos da...

 Samsung TV= 6000, art=10
 DELL notbook= 4000, art=30
 Auriculares Sony= 1500, art=15
 Monitor Philips= 12000, art=20
 Teclado logitech= 3000, art=5

Pasar todos estos productos y articulos a sus objetos correspondientes.

*/

//CODIGO


let ecommerce = [
  {nombre: "Samsung TV" , precio:6000, articulos: 10,},
  {nombre: "DELL notbook" , precio: 4000, articulos:30 ,},
  {nombre: "Auriculares Sony" , precio: 1500, articulos: 15,},
  {nombre: "Monitor Philips" , precio:12000 , articulos: 20,},
  {nombre: "Teclado logitech" , precio:3000 , articulos:5 ,}
]


/*
Elements

Nuestro cliente Luciano nos pide que de todo su inventario creemos una funcion que nos devuelva solamente los nombres de todos los productos que tiene en su ecommerce, ademas crear lo mismo para que nos devuelva el precio

Escribí una función llamada Elements 
que tenga dos parámetros, en primer lugar un arreglo de objetos y ademas el nombre de una propiedad.
La función tendrá que devolver un arreglo nuevo
que solamente contenga los valores dentro de la propiedad recibida.

Utilizar la siguiente variable:

let ecommerce = [
  { nombre: "Samsung TV", precio: 6000, articulos: 10 },
  { nombre: "DELL notbook", precio: 4000, articulos: 30 },
  { nombre: "Auriculares Sony", precio: 1500, articulos: 15 },
  { nombre: "Monitor Philips", precio: 12000, articulos: 20 },
  { nombre: "Teclado logitech", precio: 3000, articulos: 5 },
];

Ejemplo: 

elements(ecommerce, 'nombre') // ["Samsung TV", "DELL notbook", "Auriculares Sony", "Monitor Philips", "Teclado logitech"]

Luciano nos pide que creemos 2 funciones para resolver esto.. utilizando .length()

1. Utilizando metodo .push()
2. Solamente javascript Vanilla
*/

//CODIGO

// en primer lugar lo que hacemos es crear la funcion y pasarle los parametros correspondientes
/* function elements (arreglo, propiedad){
  //creamos la variable nuevoArreglo la cual comienza siendo un arreglo vacio y es aca donde vamos a ir llenando con los valores que le pasemos por argumento
  let nuevoArreglo = []
  //pasamoa a iterar nuestros elementos del arreglo
  for(let i = 0; i < arreglo.length; i++){
    //pushiamos o guardamos en la el arreglo creado al principio los valores que coincidan con el argumento pasado por parametro
    nuevoArreglo.push(arreglo[i][propiedad])
  }
  //por ultimo, pasamos a pedir que nos retorne la variable nuevoArreglo
  return nuevoArreglo
}

console.log(elements(ecommerce, 'precio'))

 */




//("---------------------------------");

//CODIGO


function elements (arreglo, propiedad){
  let nuevoArreglo = []
  for(let i = 0; i < arreglo.length; i++){
    nuevoArreglo[i] = arreglo[i][propiedad]
  }
  return nuevoArreglo
}

console.log(elements(ecommerce, 'articulos'))






