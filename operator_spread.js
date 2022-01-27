let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
console.log('this is arr1: ', arr1);
console.log('this is spreaded ...arr1: ', ...arr1);

//Unir los elementos del arr2 en arr1 using spread '...' operator
for(let item of arr2){
    arr1.push(item);
}
console.log('array1.push(item) of arr2: ', arr1);

//Other example using spread '...' and {} to copy an object and change a property.
let auto = {
    marca: "tonota",
    modelo: "taris",
    placa: "ABC123" 
}
console.log('this is the object auto:', auto);
/*let auto2 = {
    marca: "tonota",
    modelo: "taris",
    placa: "ABC123" 
}
auto2.placa: "DEF456"
*/
//Pasamos el contenido de auto a auto2
//y definimos un nuevo valor para placa
// let auto2 = {...auto,placa:"DEF456"}
// console.log(auto2);
let auto3 = {...auto, placa: 'myplaca'}
console.log(auto3)
