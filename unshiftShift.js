//Metodos unshift() y shift()

/* 
Los siguientes metodos nos sirven para manipular los Arreglos.

Los métodos unshift y shift, agregan y quitan elementos al comienzo del Arreglo
*/

/* para agregar elementos al comienzo de nuestro Arreglo, usaremos el método unshift siguiendo esta sintaxis: */

//nombreVariable.unshift(elemento)

/* El método shift, en cambio, quita los elementos que estén al comienzo de la posición y los retorna: */

//let variable = nombreVariable.shift()

//Veamos este ejemplo para entender mejor cómo funcionan estos métodos:

//CODIGO


let numeros = [7,10,12,15,48]

numeros.unshift(5)
console.log(numeros)

numeros.unshift(1,2,3)
console.log(numeros)

let numero1 = numeros.shift()
console.log(numeros)
console.log(numero1)
