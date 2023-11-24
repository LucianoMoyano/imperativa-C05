// MATRICES

// Tenemos que pensar a una matriz como una variable que contiene como valor un arreglo. Que a su vez, este arreglo, tiene sub arreglos dentro. Y estos sub-arreglos tiene elementos dentro
// una matriz se lees de filas y columnas
// tiene una estructura compleja, pero es escalable para poder almacenar información dentro.
// Tenemos que entender que son estructuras bidimensional

//let variable = ["string", 25, true, null, function(){}, {propiedad:"valor"}, []]

// generar una matriz de 3x3

/* 

console.log(matrizNumeros)
console.table(matrizNumeros) */

/* console.log(matrizNumeros[0])
console.log(matrizNumeros[0][2]) */

//modificar un valor dentro de un sub arreglo

/* matrizNumeros[1][1] = 9
console.table(matrizNumeros)
 */
let matrizNumeros = [
    [1, 2, 3 ], // primer sub-arreglo | 0
    [4, 5, 6 ], // segundo sub-arreglo | 1
    [7, 8 ,9 ]  // tercer sub-arreglo | 2
]

// recorrer e imprimir con doble for todos los numeros

/* for(let i = 0; i < matrizNumeros.length; i++){
    for(let j = 0; j < matrizNumeros[i].length; j++ ){
        console.log(matrizNumeros[i][j])
    }
} */

//realizar la iteracion anterior pero separando en variables

/* for(let i = 0; i < matrizNumeros.length; i++){
    const filas = matrizNumeros[i]
    for(let j = 0; j < filas.length; j++ ){
        const columnas = matrizNumeros[i][j]
        console.log(columnas)
    }
} */

//de la amtriz creada anteriormente, mostrar por consola solo los numeros pares

/* for(let i = 0; i < matrizNumeros.length; i++){
    for(let j = 0; j < matrizNumeros[i].length; j++ ){
       if(matrizNumeros[i][j] % 2 === 0){
        console.log(matrizNumeros[i][j])
       }
    }
}

console.log(matrizNumeros) */


//-----------------------------------------------

//generar una matriz de 10x10


/* function generarMatriz10x10 (){
    //pensar como vamos a mostrar nuestra matriz
    let array = []
    // primer for hace referencia a la creación de las columnas aumentada 10 en 10
    for(let i = 0; i <= 90; i += 10 ){
        //nos va a servir para almacenar los elementos e ir creando las filas
        let filas = []
        //nos siirve para la creación de nuestros elementos, que se incrementan de 1 en 1
        for(let j = 1; j <= 10; j++){
            //por filas se arma el numero que se va a acargar y desues se pushea
            filas.push(i + j)
        }
        //pusheamos las filas hacia el arreglo padre
        array.push(filas)
    }
    return array
} */



function generarMatriz10x10 () {
    let matriz = [];
    let value = 1
    for(let i = 0; i < 10; i++) {       
        let fila = []
        for(let j = 0; j < 10; j++){
            fila.push(value)
            value++
        }
        matriz.push(fila)
    }
    return matriz
}

console.table(generarMatriz10x10())
