let persona = {
  nombre: 'Juan',
  telefono: '999999999',
  direccion: 'Lima Peru',
  hobbies: ['musica', 'futbol', 'comida']
}

// let hobbies = persona.hobbies
// let telefono = persona.telefono
// console.log('hobbiies:', hobbies);
// console.log('telefono', telefono);

let { nombre, telefono, direccion, hobbies: pasatiempos} = persona
console.log(nombre, telefono, direccion, pasatiempos)

// Destructuring Functions
let operaciones = () => {
  return {
    sumar(a,b){
      return a+b
    },
    restar(a,b){
      return a-b
    },
    multiplicar(a,b){
      return a*b
    },
    dividir(a,b){
      return a/b
    },
  }
}
// let op = operaciones().restar(3, 4)
// console.log('result:', op)

// ## Now usind destructuring function
let {sumar: sumando, restar, multiplicar, dividir} = operaciones();
console.log('sumar:', sumando(5,9))
