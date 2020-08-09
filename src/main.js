console.log('Hello TypeScript');
// Booleans
function _booleans() {
    var esSuperman = true;
    var esBatman;
    esSuperman = convertirClark();
    function convertirClark() {
        return false;
    }
}
// _booleans()
// Numbers
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
_numbers();
// Strings
function _strings() {
    var batman = 'Batman';
    var linternaVerde = 'Linterna Verde';
    var heroes = "Los h\u00E9roes son : " + batman + ", " + linternaVerde;
    console.log(heroes);
}
_strings();
