let sumar = (a, b, ...c) => {
  let total = a + b;
  //en c se guarda el resto de los parametros
  //no guarda ni a ni b
  console.log('c', c)

  // for (let item of c){
  //   total += item
  // }

  c.forEach (num => total += num);

  return total;

}
console.log(sumar(10, 20, 3, 9, 1))
