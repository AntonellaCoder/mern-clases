let car = {
  make: 'Toyota',
  model: 'Corolla',
  gas: 10,
  fillGas(amount){
    this.gas += amount; 
  }
}
// console.log('This is the make:', car.make)

// let property = prompt('Write a property like: make, model, gas, fillGas');
//
// console.log(`You wrote this property of the Object: ${property} 
// and the value of this property is: ${car[property]}`);

console.log(`Tanque: ${car.gas}`)

car.fillGas(8);

console.log(`Tanque: ${car.gas}`)

// for: muestra iterativamente las propiedades del objeto
console.log('## Using: for')

for (let item in car){
  console.log(item)
}

// for of: muestra iterativamente los elementos de un arreglo
console.log('## Using: for of')

let cochera = [
    {marca:'tonota', precio:15000},
    {marca:'auyi', precio:25000}
];

for (let item of cochera){
  console.log(item.precio)
}

// coordenadas
let x = 19;
let y = 25;

let coor1 = {
  x: x,
  y: y,
}
console.log('coor1:', coor1)

// this method is faster
let coor2 = {x, y}
console.log('coor2:', coor2)
