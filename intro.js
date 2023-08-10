// Tipos de datos 

// En js tenemos los tipos de datos primitivos que son los que interactúan directamente con las operaciones 
// son 7 tipos y estos son: 

// - number -> 4 / 4.5
// - string -> "Hola mundo"
// - boolean -> true / false
// - null
// - undefined
// - symbol
// - bigint

// El operador de más (+) con los números se comporta de una forma y con las cadenas se comporta
// de otra forma. Son operadores distintos: suma con los números y concatenación con las cadenas

// Operadores de compración

(5 > 3)
(5 >= 5)
(5 === 6)
(5 != 4)


// Operadores lógicos

true && true // true
true && false // false 

true || true // true 
true || false // true 
false || true // true
false || false // false 

!true // false 
!false // true

// Variables 

let numero = 4;
numero + 2; 
console.log(numero); 

numero = 10; 
otroNumero = numero; 
console.log(otroNumero);

let texto = "cadena"; 

// Constantes 
// No cambia su valor y siempre se inicializan con alguno 

const IS_DISABLED = true

// Null & undefined 
// una variable solo puede ser nula asignándole el valor de null, que no tiene valor

let money = null; 

// undefined quiere decir que no ha sido definido y no se sabe de qué tipo de dato se trata, 
// o que se asignó a drede el valor de undefined

let capacidad; // undefined
let capacidad2 = undefined; // undefined

// i need the necessary functions to display the data types in javascript ?

// The 9 JavaScript data types are:

// * **Number**
// * **String**
// * **Boolean**
// * **Null**
// * **Undefined**
// * **Object**
// * **Array**
// * **Function**
// * **Symbol**

// You can use the `typeof` operator to display the data type of a variable. For example, the following code will display the data type of the variable `x`:

var x = 123;
console.log(typeof x); // "number"