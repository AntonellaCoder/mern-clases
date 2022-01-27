let basket = [];
let arrayNames = ['antonella', 'valeria'];
let fruit = {
  name: 'apple',
  price: 1.30,
  amount: 2,
  info: [
    {lot: 465},
    {ingreso: "2021-01-20"}
  ]
};
console.log('Initial basket', basket);
basket.push(fruit);
console.log('This is my basket with fruits', basket);
basket.push(arrayNames);
console.log('Now this is my basket with persons', basket);

// ######################################## 
// using foreach to do iterations 
// NOTE: The foreach only works on ARRAYS
// NOTE: The push only works with ARRAYS
// NOTE: You can push an OBJECT to ARRAY (no to object)
console.log('## Using foreach')

let onlyOnArrays = [
  {
    name: 'uno',
    lastName: 'primero'
  },
  {
    name: 'dos',
    lastName: 'segundo'
  },
  {
    name: 'tres',
    lastName: 'tercero'
  },
]
onlyOnArrays.forEach(function(item){
  console.log('property :', item.lastName);
})
