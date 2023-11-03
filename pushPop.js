/* Método push()

Para agregar elementos al final de nuestro Arreglo- sin necesidad de saber cuál es el último Índice-, usaremos el método push().

Sintaxis Del Método push(): */

/* nombreDelArreglo.push();
.push(valor1) //añade el elemento pasado por parentsis al final de un arreglo
.push(valor1, valor2, valor3) // añadir estos 3 elementos al final de un arreglo

 */


//Veamos un ejemplo:

//CODIGO

/* let colores = ["rojo", "azul", "verde"]

colores.push("amarillo")
console.log(colores)
colores.push("marron", "violeta")
console.log(colores)

 */

/* Método pop()

El método .pop() saca el último elemento del Arreglo y lo retorna. Ese valor, a su vez, lo podemos guardar para volverlo a usar.

Importante: El método pop no lleva Argumentos y solamente saca el último elemento, uno por vez.

Sintaxis Del Método pop():*/


//nombreDeArreglo.pop()




//Veamos un ejemplo:

//CODIGO

let colores = ["rojo", "azul", "verde"]

let colorNuevo = colores.pop()
console.log(colores)
console.log(colorNuevo)













