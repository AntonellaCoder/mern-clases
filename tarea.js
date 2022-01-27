// Tarea
let alumnos = ['Juan Soto', 'Sofia Perez', 'Miguel Nunes', 'Pablo Silva'];
let registros = [];
let promedios = [];
let estados = {
  'Aprobados': [],
  'Desaprobados': [],
};

// ## SOLICITAR LAS NOTAS POR ALUMNO Y ALMACENAR

// ## First time to load registros array.
// for (let item of alumVnos) {
//   let nota1 = prompt(`Ingrese la primera nota para: ${item}`);
//   nota1 = parseInt(nota1);
//   let nota2 = prompt(`Ingrese la segunda nota para: ${item}`);
//   nota2 = parseInt(nota2)
//   let datos = {
//     alumno: item,
//     nota1: nota1,
//     nota2: nota2,
//   }
//   registros.push(datos);
// }

// ## INGRESO DE NOTAS
alumnos.forEach(function(_) {
  registros = [...registros, {
    alumno: _,
    nota1: parseInt(prompt(`Ingrese la nota1 de ${_}`)),
    nota2: parseInt(prompt(`Ingrese la nota2 de ${_}`)),
    }]
})
console.log('Lista de registros:', registros)

// ## LISTA DE PROMEDIOS
registros.forEach(function(_){
  let p = (_.nota1 + _.nota2)/2;
  promedios = [...promedios, {
    alumno: _.alumno,
    promedio: p, 
    estado: p < 13 ? 'Desaprobado' : 'Aprobado', 
  }]
  })
console.log('Lista de promedios:', promedios)

// ## CANTIDAD DE ALUMNOS APROBADOS Y DESAPROBADOS
promedios.forEach(function(_){
  if (_.estado == 'Aprobado'){
    estados.Aprobados = [...estados.Aprobados, {
      alumno: _.alumno,
      promemdio: _.promedio,
    }]
  } else {
    estados.Desaprobados = [...estados.Desaprobados, {
      alumno: _.alumno,
      promemdio: _.promedio,
    }]
  }
})
console.log('Lista de estados:', estados)
