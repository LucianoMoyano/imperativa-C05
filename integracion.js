/* 

Integración de contenido:

1) Crear un array llamado misMascotas 

2) Dentro de este array crearemos un objeto literal para cada mascota. Cada objeto deberá tener: 
    nombre
    raza
    edad 
    sonido
    un método que nos retorne ese sonido 2 veces 

    Cuando esté listo, verificar en consola

3) Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1.

4) Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
    Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
    Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
    Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad

5) Ahora crearemos una función que va a generar un identificador (ID) en cada objeto, que será secuencial y que empezará en 1.

*/

let misMascotas = [
    {
        nombre: "tito",
        raza: "callejero",
        edad: 12,
        sonido: "miau",
        sonidoDeMascota: function(){
            return `${this.sonido} ${this.sonido}`
        }
    },
    {
        nombre: "ruffo",
        raza: "callejero",
        edad: 5,
        sonido: "guau",
        sonidoDeMascota: function(){
            return `${this.sonido} ${this.sonido}`
        }
    },
    {
        nombre: "lola",
        raza: "callejera",
        edad: 3,
        sonido: "miau",
        sonidoDeMascota: function(){
            return `${this.sonido} ${this.sonido}`
        }
    },
];

//3
function aumentarEdad (array){
    for(let i = 0; i < array.length; i++){
        array[i].edad = array[i].edad + 1
        //array[i].edad += 1
    }
    return array
}

console.log(misMascotas)
console.log(aumentarEdad(misMascotas))

/* 
4) Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
    Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
    Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
    Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad
*/

function aumentarEdad2(array){
    for(let i = 0; i < array.length; i++){
        if(array[i].edad < 6){
            array[i].edad = array[i].edad + 1
            //array[i].edad += 1
        }else if(array[i].edad >= 6 && array[i].edad <=10){
            array[i].edad = array[i].edad + 2
            //array[i].edad += 2
        }else{
            let mitad = array[i].edad / 2
            array[i].edad = array[i].edad + mitad
            // array[i].edad += mitad
        }
    }
    return array
}

//5

function identificador (array){
    for(let i = 0 ; i < array.length; i++){
        array[i].identificador = i + 1
    }
    return array
}

/*  array[i] = Object.assign({ id: i + 1 }, array[i]); */

console.log(identificador(misMascotas))