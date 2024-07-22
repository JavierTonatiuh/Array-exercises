/*Deberas realizar los ejercicios anexados abajo:
1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.
2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.
3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.*/


//1
let arreglo = [];

for(let i = 0; i < 10; i++){
    arreglo[i] = Math.floor(Math.random() * 1000) 
}
console.log(arreglo)

//2
let palabra = prompt("Escribe palabras separadas por coma");
if(palabra[palabra.length - 1] == ","){
    palabra = palabra.slice(0,(palabra.length-1))
}

let arrayPalabras = palabra.split(",");

let indexPalabras = 0

arrayPalabras.forEach(Element=>{

    arrayPalabras[indexPalabras++]=Element.trim()
})

console.log(arrayPalabras)

//3
let arraynumero = [10,40,30,20,15,5];

arraynumero.sort(function(a,b){
    return a-b;
});

console.log(arraynumero);

arraynumero.reverse(function(a,b){
    return a-b;
});

console.log(arraynumero);

