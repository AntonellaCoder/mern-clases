let saludar = (nombre, profesion = 'ninguna') => {
  console.log("Hola \""+nombre+"\", tu profesion es \""+profesion+"\"")
  console.log(`Que tal ${nombre}, tu profesion es ${profesion}.`)
}
saludar('Antonella', 'Estudiante');
