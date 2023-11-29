/* -------------- BUBBLE SORT ---------------------- */


let numeros = [ 6, 5, 1, 4, 3, 2, 8, 7 ]


for(let i = 0; i < numeros.length; i++){
    for(let j = 0 ; j < numeros.length - 1; j++){
        if(numeros[j] > numeros[j + 1]){
            let num = numeros[j] 
            numeros[j] = numeros[j + 1]
            numeros[j + 1] = num
        }
    }
}
console.log(numeros)




// 1)

//ordenar alfabeticamente

let letras = ["a", "v", "r", "b", "s"]

for(let i = 0; i < letras.length; i++){
    for(let j = 0 ; j < letras.length - 1; j++){
        if(letras[j] > letras[j + 1]){
            let num = letras[j] 
            letras[j] = letras[j + 1]
            letras[j + 1] = num
        }
    }
}
console.log(letras)


let personas = [
    {
        nombre: "Fredy" ,
        apellido: "Mercury" ,
        ocupacion: "cantante",
        estatura: 185 ,
    },
    {
        nombre: "Asap" ,
        apellido: "Rocky" ,
        ocupacion: "cantante",
        estatura: 205 ,
    },
    {
        nombre: "Taylor" ,
        apellido: "Swift" ,
        ocupacion: "cantante",
        estatura: 174,
    },
]
/* 
for(let i = 0; i < personas.length; i++){
    for(let j = 0; j < personas.length -1 ; j++){
        if(personas[j].estatura < personas[j+1].estatura){
            let num = personas[j]
            personas[j] = personas[j+1]
            personas[j+1] = num
        }
    }
}
console.log(personas)

// 2)
//crear una funcion que agregue al array original un nuevo objeto y los ordene dada su estatura

let nuevo = {
    nombre: "Luis" ,
        apellido: "Miguel" ,
        ocupacion: "cantante",
        estatura: 176,
}

function armarArreglo(arreglo){
    arreglo.push(nuevo)
    for(let i = 0; i < arreglo.length; i++){
        for(let j = 0; j < arreglo.length -1 ; j++){
            if(arreglo[j].estatura < arreglo[j+1].estatura){
                let num = arreglo[j]
                arreglo[j] = arreglo[j+1]
                arreglo[j+1] = num
            }
        }
    }
    return arreglo
}
console.log(armarArreglo(personas))
 */
//3)

//crear una funcion que reciba por parametro un arreglo y un string
//si el string es "ASC" debera ordenar de orma ascendente
//si el string es DES debera ordenar de forma descendente


function ordenarASC(arreglo) {
    for(let i = 0; i < arreglo.length; i++){
        for(let j = 0; j < arreglo.length -1 ; j++){
            if(arreglo[j].estatura > arreglo[j+1].estatura){
                let num = arreglo[j]
                arreglo[j] = arreglo[j+1]
                arreglo[j+1] = num
            }
        }
    }
    return arreglo
}

function ordenarDES(arreglo){
    for(let i = 0; i < arreglo.length; i++){
        for(let j = 0; j < arreglo.length -1 ; j++){
            if(arreglo[j].estatura < arreglo[j+1].estatura){
                let num = arreglo[j]
                arreglo[j] = arreglo[j+1]
                arreglo[j+1] = num
            }
        }
    }
    return arreglo
}


function ordenarArreglo(array, string){
    string = string.toUpperCase()
    if(string === "ASC"){
        return ordenarASC(array)
    } else if(string === "DES"){
        let arregloOrdenado = ordenarDES(array)
        return arregloOrdenado
    }else{
        let aux = "No se encontro la palabra requerida para ordenar"
        return aux
    }
}
console.log(ordenarArreglo(personas, "ascdfg"))