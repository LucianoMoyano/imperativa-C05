/* 
LOOP DE PARES
Debés crear una función llamada loopDePares que reciba como parámetro un número 

y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 

En caso de que el número de la iteración sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par”.
*/

  
  
  
  /* LOOP DE IMPARES CON PALABRA
  Debés crear una función llamada loopDeImpares 
  
  que reciba como parámetro un número y una palabra 
  
  y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
  
  Ahora, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.
   */
  




/* 
Sumatoria
	Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.

Ejemplo: 
sumattion(3) debe retornar 6 porque hace (1 +2 +3)
sumattion(8) debe retornar 36

 */


/* Nuevo Arreglo

Debés crear una función llamada `nuevoArreglo`
que reciba un número como parámetro
y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.

Ejemplo: 

nuevoArreglo(5) debe retornar [1,2,3,4,5]
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]
 */



/* Similar String

Debés crear una función llamada `split`
que reciba un `string` 
y simule el comportamiento de la función original, Si no sabés cómo funciona, Google puede ayudarte..

Importante: No podés usar el String.split()

El método split(), separa un String y lo convierte en un Arreglo con sus distintas posiciones.

Ejemplo: 

split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
split(“chau”) debe retornar [“c”,”h”,”a”,”u”]
 */


/* Manejando dos arreglos
Debés crear una función llamada `arrayHandler` que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”.

Ejemplo:
arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 

Soy 1 y yo soy h
Soy 2 y yo soy o
Soy 3 y yo soy l
Soy 4 y yo soy a
 */




/* PALINDROMO
  
Deben crear una función llamada “palíndromo” que indique si una palabra es palíndroma o no, debe retornar true en el caso que sea, y false en el caso que no.
  
  
Ejemplo: 

  palindromo("anilina") debe retornar true
  palindromo("Ana") debe retornar true
  palindromo("Enrique") debe retornar false */


    /*   Consecutivos similares
Debes crear una función llamada “consecutivosSimilares” 
que reciba un string 
y retorne cuantos consecutivos similares hay en un string. 

Ejemplo: 
consecutivosSimilares(“AAAA”) debe retornar 3
consecutivosSimilares(“BBBBB”) debe retornar 4
consecutivosSimilares(“ABABABAB”) debe retornar 0
consecutivosSimilares(“BABABA”) debe retornar 0
consecutivosSimilares(“AAABBB”) debe retornar 4 */
/* 
let consecutivosSimilares = string => {
    let acum = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == string[i + 1]) {
            acum++
        }
    }
    return acum
}

*/


function consecutivosSimilares(string){
  let contadora = 0
  for(let i = 0; i < string.length; i++){
    if(string[i] === string[i+1]){
      contadora += 1
    }
  }
  return contadora
}


console.log(consecutivosSimilares("AAAAA"))

/*   Rotación de arreglo a la derecha
  Debes crear una función llamada “rotar” que reciba un arreglo y un número, y debera retornar un nuevo arreglo con los elementos rotados la cantidad de veces como sea el número a la derecha.
  
  Ejemplo: 
  rotar([1, 2, 3, 4, 5], 2) debe retornar [4,5,1,2,3]
  rotar([1, 2, 3, 4, 5], 3) debe retornar [3, 4, 5, 1, 2]
  */

  function rotar (array,n){
    for(let i = 0; i < n; i++){
      array.unshift(array.pop())
    }
    return array
  }

/*   function rotar(arr, numero) {
    let largo = arr.length;
    let resultado = [];
    for (let i = 0; i < largo; i++) {
      resultado.push(arr[(i - numero + largo) % largo]);
    }
    return resultado;
  } */
  //const rotar = (arr, num) => [...arr.slice(-num), ...arr.slice(0, -num)]