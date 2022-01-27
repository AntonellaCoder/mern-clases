// You could use parseInt o parseFloat
let monto = prompt('ingrese el monto a cobrar:');
console.log('The type of monto is: ', typeof monto);
monto = parseInt(monto)
console.log('Now the type of monto is ', typeof monto)
let retencion = 0;
let pago = monto;

if (monto > 1500){
  retencion = monto * 0.08;
  pago = monto * 0.92;
}
console.log('Monto Total: S/.', monto);
console.log('Retencion: S/.', retencion);
console.log('El monto a pagar es: S/.', pago)
console.log(typeof monto)
