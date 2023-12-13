/* PRE - EXAMEN FINAL */

//EJERCICIO Nº1

//Dada la matriz
//3x3

let matriz = [
  [5, 2, 2], // 0
  [2, 5, 2], // 1
  [4, 4, 5], // 2
];

/* 
1) Crear una función que reciba la matriz por parámetro, sume todos los valores de primer diagonal  y retorne la suma.
2) Crear una función que reciba la matriz generada por parámetro y retorne un nuevo array con todos los valores pares de la matriz. */

// 1) Sumar los valores de la primera diagonal
function sumaDiagonal(matriz) {
let suma = 0;
for (let i = 0; i < matriz.length; i++) {
  suma += matriz[i][i];
}
return suma;
}

// 2) Retornar un nuevo array con valores pares
function valoresPares(matriz) {
let pares = [];
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] % 2 === 0) {
      pares.push(matriz[i][j]);
    }
  }
}
return pares;
}

// Ejemplos de uso
console.log(sumaDiagonal(matriz)); // Debería imprimir: 15
console.log(valoresPares(matriz)); // Debería imprimir: [2, 2, 2, 4, 4]



/* ---------------------------------------------------------- */

//EJERCICIO Nº2

//Dado el siguiente arreglo de objetos:

let cuadros = [
  {
    nombre: "Mona Lisa",
    creador: "Leonardo Da Vinci",
  },
  {
    nombre: "La ultima cena",
    creador: "Leonardo Da Vinci",
  },
  {
    nombre: "La noche estrellada",
    creador: "Vincent van Gogh",
  },
  {
    nombre: "El grito",
    creador: "Edvard Munch",
  },
  {
    nombre: "Trigal con cuervos",
    creador: "Vincent van Gogh",
  },
  {
    nombre: "Maria Magdalena",
    creador: "Leonardo Da Vinci",
  },
  {
    nombre: "Amor y Dolor",
    creador: "Edvard Munch",
  },
  {
    nombre: "Ansiedad",
    creador: "Edvard Munch",
  },
];
  /* 
  1) Realizar una función llamada filtrarPorCreador que reciba por parámetro el array y el nombre de un artista. Nuestra función deberá retornar un nuevo array que contenga los nombres de las obras de arte que ha realizado el creador recibido por parámetro. Por ejemplo, si se envía por parámetro: (cuadros, “Leonardo Da Vinci”). 
  
  Nuestra función deberá retornar: 
  
  ("Mona Lisa", "La ultima cena", "Maria Magdalena")

  */

// 1) Filtrar obras de un creador
function filtrarPorCreador(cuadros, creador) {
let obras = [];
for (let i = 0; i < cuadros.length; i++) {
  if (cuadros[i].creador === creador) {
    obras.push(cuadros[i].nombre);
  }
}
return obras;
}

// Ejemplo de uso
console.log(filtrarPorCreador(cuadros, "Leonardo Da Vinci")); 
// Debería imprimir: ["Mona Lisa", "La ultima cena", "Maria Magdalena"]



  /* ---------------------------------------------------------- */

/* 
//EJERCICIO Nº3

Realizar una función que mediante el algoritmo de ordenamiento bubbleSort:

1) indique si el arreglo de objetos del EJERCICIO Nº2 se encuentra ordenado alfabéticamente según su creador o no. 
2) Si está ordenado deberá retornar true. Si no lo está, deberá ordenarlo.  
3) Realizar el correspondiente llamado a esta función para demostrar su correcto funcionamiento.  
*/
// Función de ordenamiento bubbleSort
function bubbleSort(cuadros) {
let ordenado = true;
for (let i = 0; i < cuadros.length - 1; i++) {
  if (cuadros[i].creador > cuadros[i + 1].creador) {
    ordenado = false;
    break;
  }
}
if (!ordenado) {
  for (let i = 0; i < cuadros.length - 1; i++) {
    for (let j = 0; j < cuadros.length - i - 1; j++) {
      if (cuadros[j].creador > cuadros[j + 1].creador) {
        let temp = cuadros[j];
        cuadros[j] = cuadros[j + 1];
        cuadros[j + 1] = temp;
      }
    }
  }
}
return ordenado;
}

// Ejemplo de uso
console.log(bubbleSort(cuadros)); // Debería imprimir: false o true (dependiendo del estado inicial)


/* ---------------------------------------------------------- */

/* 
//EJERCICIO Nº4

Desarrollar una función para cada uno de las siguientes apartados: 

1) Que reciba por parámetro un número entero y retorne su triple.
2) Que reciba por parámetro dos números enteros y retorne la multiplicación de ambos.  
3) Que reciba por parámetro dos números enteros, verificar que sean distintos de 0 y retorne la división de ambos. 

*/
// 1) Retornar el triple de un número
function triple(numero) {
return numero * 3;
}

// 2) Multiplicar dos números
function multiplicacion(num1, num2) {
return num1 * num2;
}

// 3) División de dos números (verificar que no sean 0)
function division(num1, num2) {
if (num2 !== 0) {
  return num1 / num2;
} else {
  return "Error: División por cero.";
}
}

// Ejemplos de uso
console.log(triple(5)); // Debería imprimir: 15
console.log(multiplicacion(2, 4)); // Debería imprimir: 8
console.log(division(10, 2)); // Debería imprimir: 5
console.log(division(5, 0)); // Debería imprimir: "Error: División por cero."


/* ---------------------------------------------------------- */


/* 
//EJERCICIO Nº5

Crear una matriz de 5 x 7.
Crear una función que reciba la matriz generada por parámetro, sume todos los valores de la fila 4 y retorne la suma.
 */

// Crear una matriz de 5 x 7
let nuevaMatriz = [];
for (let i = 0; i < 5; i++) {
nuevaMatriz[i] = [];
for (let j = 0; j < 7; j++) {
  nuevaMatriz[i][j] = Math.floor(Math.random() * 10); // Llenar con números aleatorios del 0 al 9
}
}

// Función para sumar los valores de la fila 4
function sumaFila4(matriz) {
let suma = 0;
for (let i = 0; i < matriz[3].length; i++) {
  suma += matriz[3][i];
}
return suma;
}

// Ejemplo de uso
console.log(sumaFila4(nuevaMatriz)); // Debería imprimir la suma de los valores de la fila 4


/* ---------------------------------------------------------- */



//EJERCICIO Nº6

//Dado el siguiente arreglo de objetos: 

let personas = [
    {
        nombre : "Lucia",
        oficio : "Medica",
        edad : 37
    },
    {
        nombre : "Tiziano",
        oficio : "Programador",
        edad : 9
    },
    {
        nombre : "Julian",
        oficio : "Chofer",
        edad : 45
    },
    {
        nombre : "Adriana",
        oficio : "Chef",
        edad : 24
    },
]

/* 

1) Realizar una función que reciba un array como parámetro, y lo recorra para filtrar las personas cuya edad sea mayor a 25. La función deberá retornar un nuevo arreglo con las personas que cumplan con la condición antes mencionada.
2) Ejecutar el correspondiente llamado a la función realizada en el inciso anterior para mostrar su correcto funcionamiento. 

*/

// 1) Filtrar personas mayores de 25 años
function filtrarMayoresDe25(personas) {
let mayoresDe25 = [];
for (let i = 0; i < personas.length; i++) {
  if (personas[i].edad > 25) {
    mayoresDe25.push(personas[i]);
  }
}
return mayoresDe25;
}

// Ejemplo de uso
console.log(filtrarMayoresDe25(personas));
// Debería imprimir: [{nombre: "Lucia", oficio: "Medica", edad: 37}, {nombre: "Julian", oficio: "Chofer", edad: 45}]



/* 
Escribir una función que reciba una array y solo imprima los valores que
se repiten. Por ejemplo, dada la siguiente array e índice, la función
imprimirá '6,23,33,100'. let array =
[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; */



function bubbleSort(arr) {
const n = arr.length;
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            // Intercambiar arr[j] y arr[j + 1]
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
}

function imprimirRepetidos(arr) {
bubbleSort(arr); // Ordenar la array usando Bubble Sort

let repetidos = [];

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1] && !repetidos.includes(arr[i])) {
        repetidos.push(arr[i]);
    }
}

console.log(repetidos.join(','));
}

let array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
imprimirRepetidos(array);