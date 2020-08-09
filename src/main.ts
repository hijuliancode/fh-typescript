console.log('Hello TypeScript')

//// Booleans

  function _booleans() {
    let esSuperman : boolean = true;
    let esBatman : boolean;

    esSuperman = convertirClark()

    function convertirClark() {
      return false;
    }
  }
  // _booleans()



//// Numbers

  function _numbers() {
    let avengers: number = 5;
    let villanos: number = 2;
    let otros: number = 2;

    if(avengers > villanos) {
      console.log('Estamos salvados');
    } else {
      console.log('Estamos muertos');
    }
  }
  // _numbers()



//// Strings

  function _strings() {
    let batman: string = 'Batman';
    let linternaVerde: string = 'Linterna Verde';

    let heroes = `Los héroes son : ${batman}, ${linternaVerde}`;
    console.log(heroes)
  }
  // _strings()



//// Any // Al no asignar el tipo, por defecto es tipo Any

  function _any() {
    let vengador:any; // Tipo Any
    let existe; // Tipo Any
    let derrotas; // Tipo Any

    vengador = 'Dr. Strange';
    console.log(vengador.charAt(0))

    vengador = 150.55554;
    console.log(vengador.toFixed(2))

    vengador = true;
    console.log(vengador)
  }
  // _any()
