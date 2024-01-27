// En este ejercicio, se escribirá una función principal greetPerson que define una variable y dos funciones anidadas. Cada función anidada usará el scope de distintas maneras.


/*
- Tener una funcion principal greetPerson
- Variable 
- Dos funciones anidadas.
- - Estas funciones van a usar el scope de manera diferente

Scope: Global / Local 
*/

// function greetPerson(name) {
//   let greeting = "Hola ";
  
//   function displayName() {
//     console.log(greeting + name)
//   }
  
//   function changeGreeting(newGreeting) {
//       greeting = newGreeting
//   }  
  
  
//   displayName()
//   changeGreeting("Bienvenido ")
//   displayName()
// }


// greetPerson("Francisco")

// Este ejercicio busca demostrar cómo las funciones pueden crear un scope privado en JavaScript y cómo es posible exponer sólo ciertas partes de ese scope utilizando funciones.

function createCounter () {
  // SCOPE GLOBAL PARA TODA LA FUNCION
  let counter = 0;
  
  return {
    increment: function (){
      counter += 1;
      console.log(counter);
    },
    decrement: function() {
      counter-= 1;
      console.log(counter)
    }
  }
}

// const TOTAL = createCounter()
// TOTAL.increment();
// TOTAL.increment();
// TOTAL.increment();
// TOTAL.incremene();
// TOTAL.decrement();

// En este ejercicio, crearás una función principal que se llame createAccessControl que defina una variable y dos funciones anidadas para permitir y prohibir el acceso a un recurso. Cada función anidada hará uso del scope de manera diferente para modificar o acceder a la variable que controla el acceso.
/*
- 1 funcion principal
- 2 funciones anidadas
- crear una variable de estado global 
- Modificar en las funciones esta variable
- Imprimir en una de esas funciones si tiene o no tiene acceso
  const accessControl = createAccessControl();
  accessControl.attempAcces()
  accessControl.grantAccess()
  accessControl.attempAccess()
*/



// function createAccessControl() {
//     let accessGranted = false;
    
//     function grantAccess() {
//         // Esta función cambia el estado de 'accessGranted' para permitir el acceso.
//         accessGranted = true;
//         console.log("Access granted.");
//     }
    
//     function attemptAccess() {
//         // Esta función utiliza el valor actual de 'accessGranted' para determinar si mostrar un mensaje de acceso.
//         if (accessGranted) {
//             console.log("You have access to the system.");
//         } else {
//             console.log("Access denied. Please request access.");
//         }
//     }
    
//     // Revela sólo las funciones y no la variable de estado directamente.
//     return {
//         grantAccess: grantAccess,
//         attemptAccess: attemptAccess
//     };
// }

// const accessControl = createAccessControl();
// accessControl.attemptAccess();  // Debería mostrar "Access denied. Please request access."
// accessControl.grantAccess();    // Cambia el estado para permitir el acceso
// accessControl.attemptAccess();  // Debería mostrar "You have access to the system."


// let frutas = []
// frutas[0] = "Naranjas"
// frutas[1] = "Manzanas"

// // console.log(frutas[1])
// // console.log(frutas.length)

// frutas.push("Peras")
// console.log(frutas)
// frutas.pop()
// console.log(frutas)

// frutas.unshift("Bananas")
// console.log(frutas)
// frutas.shift()
// console.log(frutas)


// let nombres = "Martin, Pepe,, Agustin"
// let arreglo = nombres.split(",")
// arreglo

// let frutas = ["Bananas", "manzanas", "peras"]

// frutas.slice(1,2)



/*
Ejercicio 1: Agregar Elementos al Final del Array
Escribe una función que reciba un array y varios elementos como argumentos. La función deberá agregar todos los elementos nuevos al final del array.
arr.push(...items)

Ejercicio 2: Extraer el Último Elemento del Array
Crea una función que reciba un array y elimine el último elemento. La función deberá devolver el elemento eliminado.
return arr.pop();

Ejercicio 3: Extraer el Primer Elemento del Array
Escribe una función que tome un array y elimine el primer elemento. La función debe devolver el elemento eliminado.
return arr.shift();

Ejercicio 4: Agregar Elementos al Principio del Array
Crea una función que reciba un array y varios elementos. La función deberá agregar todos los elementos nuevos al principio del array.

arr.unshift(...items);
*/





