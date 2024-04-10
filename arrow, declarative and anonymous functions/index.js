// declarative functions

// 1.
function fullName(nombres, apellidos){
    console.log(`the complete name is: ${nombres} ${apellidos}`);
}

fullName("Santiago", "Vivas Lopez");

// 2.
function operations(number1, number2){
    console.log("the sum is: " + (number1 + number2));
    console.log("the subtraction is: " + (number1 - number2));
    console.log("the multiplication is:" + (number1 * number2));
    console.log("the division is: " + (number1 / number2));
}

operations(2,5);

// 3.
function greetings(obj){
    console.log("greetings, you are very welcome " + obj.nombre +" "+ obj.apellido);
}

let persona = {
    nombre: "Santiago",
    apellido: "Vivas"
}

greetings(persona);

// 4.
function datos(nombre, apellido, edad, sexo, estadoMarital, telefono, madre, padre, hobby, videogame){
    console.log(`La persona se llama ${nombre} ${apellido}, tiene ${edad} años, es de sexo ${sexo} y su estado marital es ${estadoMarital}, su telofono es ${telefono}, el nombre de su madre es ${madre} y el de su padre ${padre}, su hobby favorito es ${hobby} y su juego favorito es ${videogame}`);
}

datos("Santiago", "Vivas", 27, "Masculino", "Union libre", 3014530937, "Sandra", "Guillermo", "Jugar juegos de mesa", "Dota 2");

// 5.
function ciudadDepartamento(ciudad, departamento){
    console.log(`La ciudad es ${ciudad} y el departamento es ${departamento}`);
}

ciudadDepartamento("Popayan", "Cauca");

// 6.
function vivienda(casa){
    console.log(`Santiago vive en un(a) ${casa}`);
}

vivienda("Casa");

//  7.
function detectarPar(numero){
    if(numero%2 == 0){
        console.log("El numero es par");
    }
    else console.log("El numero es impar");
}

detectarPar(15);

// 8.
function raiz(numero){
    console.log(`La raiz cuadrada de ${numero} es: ${Math.sqrt(numero)}`)
}

raiz(36);

// 9.
function potencia(numero1, numero2){
    console.log(`${numero1} elevado a la ${numero2} es igual a: ${Math.pow(numero1, numero2)}`);
}

potencia(3, 4);

// 10.
function sumeRedondeada(numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8){
    let suma = numero1+numero2+numero3+numero4+numero5+numero6+numero7+numero8
    console.log(`La sumatoria es: ${suma} y la suma redondeada es: ${Math.round(suma)}`);
}

sumeRedondeada(5,6,4.553,6.66,7.23456, 8, 9, 75);


// Anonymus functions

// 1.
const fullName = function(nombres, apellidos){
    console.log(`the complete name is: ${nombres} ${apellidos}`);
}

fullName("Santiago", "Vivas Lopez");

// 2.
const operations = function(number1, number2){
    console.log("the sum is: " + (number1 + number2));
    console.log("the subtraction is: " + (number1 - number2));
    console.log("the multiplication is:" + (number1 * number2));
    console.log("the division is: " + (number1 / number2));
}

operations(2,5);

// 3.
const greetings = function(obj){
    console.log("greetings, you are very welcome " + JSON.stringify(obj));
}

let persona1 = {
    nombre: "Santiago",
    apellido: "Vivas"
}

greetings(persona1);

// 4.
const datos = function(nombre, apellido, edad, sexo, estadoMarital, telefono, madre, padre, hobby, videogame){
    console.log(`La persona se llama ${nombre} ${apellido}, tiene ${edad} años, es de sexo ${sexo} y su estado marital es ${estadoMarital}, su telofono es ${telefono}, el nombre de su madre es ${madre} y el de su padre ${padre}, su hobby favorito es ${hobby} y su juego favorito es ${videogame}`);
}

datos("Santiago", "Vivas", 27, "Masculino", "Union libre", 3014530937, "Sandra", "Guillermo", "Jugar juegos de mesa", "Dota 2");

// 5.
const ciudadDepartamento = function(ciudad, departamento){
    console.log(`La ciudad es ${ciudad} y el departamento es ${departamento}`);
}

ciudadDepartamento("Popayan", "Cauca");

// 6.
const vivienda = function(casa){
    console.log(`Santiago vive en un(a) ${casa}`);
}

vivienda("Casa");

//  7.
const detectarPar = function(numero){
    if(numero%2 == 0){
        console.log("El numero es par");
    }
    else console.log("El numero es impar");
}

detectarPar(15);

// 8.
const raiz = function(numero){
    console.log(`La raiz cuadrada de ${numero} es: ${Math.sqrt(numero)}`)
}

raiz(36);

// 9.
const potencia = function(numero1, numero2){
    console.log(`${numero1} elevado a la ${numero2} es igual a: ${Math.pow(numero1, numero2)}`);
}

potencia(3, 4);

// 10.
const sumaRedondeada1 = function(numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8){
    let suma = numero1+numero2+numero3+numero4+numero5+numero6+numero7+numero8
    console.log(`La sumatoria es: ${suma} y la suma redondeada es: ${Math.round(suma)}`);
}

sumaRedondeada1(5,6,4.553,6.66,7.23456, 8, 9, 75);


// Arrow functions

// 1.
const fullName = (nombres, apellidos) => {
    console.log(`the complete name is: ${nombres} ${apellidos}`);
}

fullName("Santiago", "Vivas Lopez");

// 2.
const operations = (number1, number2) => {
    console.log("the sum is: " + (number1 + number2));
    console.log("the subtraction is: " + (number1 - number2));
    console.log("the multiplication is:" + (number1 * number2));
    console.log("the division is: " + (number1 / number2));
}

operations(2,5);

// 3.
const greetings = (obj) => {
    console.log("greetings, you are very welcome " + obj.nombre +" "+ obj.apellido);
}

let persona2 = {
    nombre: "Santiago",
    apellido: "Vivas"
}

greetings(persona2);

// 4.
const datos = (nombre, apellido, edad, sexo, estadoMarital, telefono, madre, padre, hobby, videogame) => {
    console.log(`La persona se llama ${nombre} ${apellido}, tiene ${edad} años, es de sexo ${sexo} y su estado marital es ${estadoMarital}, su telofono es ${telefono}, el nombre de su madre es ${madre} y el de su padre ${padre}, su hobby favorito es ${hobby} y su juego favorito es ${videogame}`);
}

datos("Santiago", "Vivas", 27, "Masculino", "Union libre", 3014530937, "Sandra", "Guillermo", "Jugar juegos de mesa", "Dota 2");

// 5.
const ciudadDepartamento = (ciudad, departamento) => {
    console.log(`La ciudad es ${ciudad} y el departamento es ${departamento}`);
}

ciudadDepartamento("Popayan", "Cauca");

// 6.
const vivienda = (casa) => {
    console.log(`Santiago vive en un(a) ${casa}`);
}

vivienda("Casa");

//  7.
const detectarPar = (numero) => {
    if(numero%2 == 0){
        console.log("El numero es par");
    }
    else console.log("El numero es impar");
}

detectarPar(15);

// 8.
const raiz = (numero) => {
    console.log(`La raiz cuadrada de ${numero} es: ${Math.sqrt(numero)}`)
}

raiz(36);

// 9.
const potencia = (numero1, numero2) => {
    console.log(`${numero1} elevado a la ${numero2} es igual a: ${Math.pow(numero1, numero2)}`);
}

potencia(3, 4);

// 10.
const sumaRedondeada2 = (numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8) => {
    let suma = numero1+numero2+numero3+numero4+numero5+numero6+numero7+numero8
    console.log(`La sumatoria es: ${suma} y la suma redondeada es: ${Math.round(suma)}`);
}

sumaRedondeada2(5,6,4.553,6.66,7.23456, 8, 9, 75);