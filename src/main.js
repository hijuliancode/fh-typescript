console.log('Hello TypeScript');
//// Booleans
function _booleans() {
    var esSuperman = true;
    var esBatman;
    esSuperman = convertirClark();
    function convertirClark() {
        return false;
    }
}
// _booleans()
//// Numbers
function _numbers() {
    var avengers = 5;
    var villanos = 2;
    var otros = 2;
    if (avengers > villanos) {
        console.log('Estamos salvados');
    }
    else {
        console.log('Estamos muertos');
    }
}
// _numbers()
//// Strings
function _strings() {
    var batman = 'Batman';
    var linternaVerde = 'Linterna Verde';
    var heroes = "Los h\u00E9roes son : " + batman + ", " + linternaVerde;
    console.log(heroes);
}
// _strings()
//// Any // Al no asignar el tipo, por defecto es tipo Any
function _any() {
    var vengador; // Tipo Any
    var existe; // Tipo Any
    var derrotas; // Tipo Any
    vengador = 'Dr. Strange';
    console.log(vengador.charAt(0));
    vengador = 150.55554;
    console.log(vengador.toFixed(2));
    vengador = true;
    console.log(vengador);
}
// _any()
//// Arrays
function _arrays() {
    var numeros = [1, 2, 3, 4, 5, 6];
    var villanos = ['Omega Rojo', 'Duende Verde', 'Dormammu'];
}
_arrays();
//// Tuples
function tuples() {
    var heroe = ['Dr. Strange', 100, true];
    console.log(heroe);
}
tuples();
