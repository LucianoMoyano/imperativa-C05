/* slice()

El método slice() se usa para generar una copia de un Arreglo. Esto sirve para trabajar sobre el clon del Arreglo sin afectar su original.

Como los Arreglos se pasan por referencia y no por valor, necesitamos un método para poder alterar un Arreglo sin afectar el original o tambien como se suele utilizar este metodo para recortar arreglos.
*/

//Sintaxis Del Método slice()

/* let arregloCopia = arregloOriginal.slice() //si dejamos la ejecucion del metodo sin elementos dentro se v aa estar realizando la copia o el clon de arreglo original sin ningun recorte dentro

.slice(valor1) //clona el arreglo desde el indice pasado como argumento

.slice(valor1, valor2) //clona el arreglo desde el indice pasado como argumento, lo selecciona y clona desde ese indice hasta el segundo argumento

 */


//Veamos un ejemplo para ver la diferencia de cada caso:

//CODIGO

let frutas = ["banana", "naranja", "limon", "manzana", "sandia"]

/* let clonFrutas = frutas.slice()
console.log(clonFrutas)

 */

/* let todasMenosBanana = frutas.slice(1)
console.log(todasMenosBanana) */

let menosFrutas = frutas.slice(1, 4)
console.log(menosFrutas)