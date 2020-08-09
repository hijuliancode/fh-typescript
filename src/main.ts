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



//// Arrays

  function _arrays() {
    let numeros:number[] = [1, 2, 3, 4, 5, 6]
    let villanos:string[] = ['Omega Rojo', 'Duende Verde', 'Dormammu']
  }
  _arrays()



//// Tuples

  function _tuples() {
    let heroe:[ string, number, boolean ] = ['Dr. Strange', 100, true]

    console.log(heroe)  

  }
  // _tuples()


//// Enum

  function _enum() {
    enum Volumen {
      min = 1, 
      medio = 5,
      max = 10,
    }
    let audio: number = Volumen.medio

    console.log(audio);
    
  }
  // _enum()



//// Void

  function _void() {
    function llamar_batman():void {
      console.log('mostrar batiseñal');
    }

    llamar_batman()
    
  }
  // _void()


  //// Never
    // Sirve para hacer puntos criticos en nuestro programa, o lineas de código que nunca deben de suceder

    function _never() {
      function error(mensaje: string):never {
        throw new Error(mensaje)
      }
      error("Error critico, linea 128 alcanzada.")
    }
    // _never()



//// Aserciones de tipo - 

  function _type_assertions() {
    let cualquierValor:any = 'Cualquier cosa';
    
    let largoDelString:number = (<string>cualquierValor).length;

    console.log(largoDelString);
    
  }
  // _type_assertions()



//// Null & Undefined

function _null_undefined() {
   let ironman: string

   ironman = "Tony"

   ironman = null

   let numero:number = undefined

   numero = 10
  
}
_null_undefined()