// Declaración de variables con diferentes tipos de datos
let numero = 42; // Número entero
let decimal = 3.14; // Número decimal
let texto = "Hola, mundo!"; // Cadena de texto
let textoSimple = 'Hola, mundo!'; // Cadena de texto
let booleano = true; // Valor booleano (true/false)
let arreglo = [1, 2, 3, 4, 5]; // Arreglo
let objeto = { nombre: "Juan", edad: 25 }; // Objeto

// Imprimir los valores en la consola del navegador
console.log("Número:", numero);
console.log("Número:", typeof numero);
console.log("Decimal:", decimal);
console.log("Texto:", texto);
console.log("Booleano:", booleano);
console.log("Arreglo:", arreglo);
console.log("Arreglo:", typeof arreglo);
console.log("Objeto:", objeto);



let userFran = {
    nombre:"Fran",
    apellido:"Suarez",
    correo:"imanolsuarez98@gmail.com",
    edad:25,
    suscrip:true, 
}

let userJessica = {
    nombre:"Jessica",
    apellido:"Arroyo",
    correo:"jessica.arroyo@gmail.com",
    edad:25,
    suscrip:false, 
}



console.log(userFran.apellido)
console.log(userJessica)




// Operaciones de suma, resta, multiplicación y división
let suma = 10 + 5;        // Suma
let resta = 20 - 8;       // Resta
let multiplicacion = 6 * 4; // Multiplicación
let division = 24 / 3;     // División

console.log("Suma:", suma);               // Resultado: 15
console.log("Resta:", resta);             // Resultado: 12
console.log("Multiplicación:", multiplicacion); // Resultado: 24
console.log("División:", division);       // Resultado: 8


// Operaciones de módulo, incremento y decremento
let resto = 17 % 5;      // Módulo (resto de la división)
let contador = 0;

console.log("Resto de la división:", resto); // Resultado: 2

// Incremento
contador++;
console.log("Incremento:", contador);         // Resultado: 1

// Decremento
contador--;
console.log("Decremento:", contador);         // Resultado: 0
