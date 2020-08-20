//Puede ver pelicula
const puedeVerPelicula = (edad, tieneAutorizacion) => {
    if (edad >= 15 || tieneAutorizacion == true) {
        return true
    }
    else {
        return false
    }
}

console.log(puedeVerPelicula(12, false)) // false
console.log(puedeVerPelicula(12, true))  // true
console.log(puedeVerPelicula(16, false)) // true
console.log(puedeVerPelicula(18, true))  // true

//Esta en rango
const estaEnRango = (valor, minimo, maximo) => {
    if (valor >= minimo && valor <= maximo) {
        return true
    }
    else {
        return false
    }
}

console.log(estaEnRango(3, 1, 10))   // true
console.log(estaEnRango(1, 1, 10))   // true
console.log(estaEnRango(10, 1, 10))  // true
console.log(estaEnRango(12, 1, 10))  // false
console.log(estaEnRango(-3, 1, 10))  // false

//Es vocal
const esVocal = (letra) => {
    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
        return true
    }
    else {
        return false
    }
}

console.log(esVocal('a')) // true
console.log(esVocal('n')) // false
console.log(esVocal('e')) // true

//Es consonante
const esConsonante = (letra) => {
    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
        return false
    }
    else {
        return true
    }
}

console.log(esConsonante('a')) // false
console.log(esConsonante('n')) // true
console.log(esConsonante('e')) // false

//Puede renovar carnet
const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => {
    if (pasoTests && tieneMultasImpagas == false && pagoImpuestos) {
        return true
    }
    else {
        return false
    }
}

console.log(puedeRenovarCarnet(true, true, true))    // false
console.log(puedeRenovarCarnet(true, true, false))   // false
console.log(puedeRenovarCarnet(true, false, true))   // true
console.log(puedeRenovarCarnet(true, false, false))  // false
console.log(puedeRenovarCarnet(false, true, true))   // false
console.log(puedeRenovarCarnet(false, true, false))  // false
console.log(puedeRenovarCarnet(false, false, true))  // false
console.log(puedeRenovarCarnet(false, false, false)) // false

//Puede graduarse
const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) => {
    if (asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada) {
        return true
    }
    else {
        return false
    }
}

console.log(puedeGraduarse(80, 50, true))  // true
console.log(puedeGraduarse(80, 50, false)) // false
console.log(puedeGraduarse(80, 45, true))  // false
console.log(puedeGraduarse(80, 45, false)) // false
console.log(puedeGraduarse(65, 50, true))  // false
console.log(puedeGraduarse(33, 55, false)) // false
console.log(puedeGraduarse(42, 45, true))  // false
console.log(puedeGraduarse(28, 45, false)) // false

//Es par o impar
const esParOImpar = (numero) => {
    if ((numero % 2) == 0) {
        return 'par'
    }
    else {
        return 'impar'
    }
}

console.log(esParOImpar(3))  // 'impar'
console.log(esParOImpar(10)) // 'par'
console.log(esParOImpar(25))  // 'impar'
console.log(esParOImpar(8))  // 'par'

//Es positivo o negativo
const esPositivoONegativo = (numero) => {
    if (numero >= 0) {
        return 'positivo'
    }
    else {
        return 'negativo'
    }
}

console.log(esPositivoONegativo(3))  // 'positivo'
console.log(esPositivoONegativo(-5)) // 'negativo'

//Avanzar semaforo
const avanzarSemaforo = (colorActual) => {
    if (colorActual == 'verde') {
        return 'amarillo'
    }
    else if (colorActual == 'amarillo') {
        return 'rojo'
    }
    else {
        return 'verde'
    }
}

console.log(avanzarSemaforo('verde'))     // 'amarillo'
console.log(avanzarSemaforo('amarillo'))  // 'rojo'
console.log(avanzarSemaforo('rojo'))      // 'verde'

//Obtener sensacion
const obtenerSensacion = (temperatura) => {
    if (temperatura < 0) {
        return '¡Está helando!'
    }
    else if (temperatura >= 0 && temperatura < 15) {
        return '¡Hace frío!'
    }
    else if (temperatura >= 15 && temperatura < 25) {
        return 'Está lindo'
    }
    else if (temperatura >= 25 && temperatura < 30) {
        return 'Hace calor'
    }
    else {
        return '¡Hace mucho calor!'
    }
}

console.log(obtenerSensacion(33)) // "¡Hace mucho calor!"
console.log(obtenerSensacion(-1)) // ¡Está helando!
console.log(obtenerSensacion(15)) // Está lindo

//Obtenber nota
const obtenerNota = (puntaje) => {
    if (puntaje >= 0 && puntaje < 6) {
        return 'Desaprobado'
    }
    else if (puntaje >= 6 && puntaje < 7) {
        return 'Regular'
    }
    else if (puntaje >= 7 && puntaje < 8) {
        return 'Bueno'
    }
    else if (puntaje >= 8 && puntaje < 9.6) {
        return 'Muy Bueno'
    }
    //Agrego l'imite inferior en esta condicion porque aun no aprendimos a redondear
    else if (puntaje >= 9.6 && puntaje <= 10) {
        return 'Excelente'
    }
    else {
        return 'Puntaje inválido'
    }
}

console.log(obtenerNota(7))    // "Bueno"
console.log(obtenerNota(9.6))  // "Excelente"
console.log(obtenerNota(12))   // "Puntaje inválido"

//Piedra, papel,tijera
const jugarPiedraPapelTijera = (a, b) => {
    if ((a == 'piedra' || b == 'piedra') && (a == 'tijera' || b == 'tijera')){
        return '¡Ganó piedra!'
    }
    else if ((a == 'papel' || b == 'papel') && (a == 'tijera' || b == 'tijera')){
        return '¡Ganó tijera!'
    }
    else if ((a == 'piedra' || b == 'piedra') && (a == 'papel' || b == 'papel')){
        return '¡Ganó papel!'
    }
    else {
        return '¡Empate!'
    }
}

console.log(jugarPiedraPapelTijera('tijera', 'piedra'))  // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera('piedra', 'tijera'))  // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera('papel', 'piedra'))   // ¡Ganó papel!
console.log(jugarPiedraPapelTijera('piedra', 'papel'))   // ¡Ganó papel!
console.log(jugarPiedraPapelTijera('papel', 'tijera'))   // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera('tijera', 'papel'))   // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera('piedra', 'piedra'))  // ¡Empate!
console.log(jugarPiedraPapelTijera('papel', 'papel'))    // ¡Empate!
console.log(jugarPiedraPapelTijera('tijera', 'tijera'))  // ¡Empate!