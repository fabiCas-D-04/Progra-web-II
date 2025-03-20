const ciudadesDisponibles= new Array("Santiago", "Bogota", "Lima", "Monte Video");

const paisesDisponibles= ("Colombia", "Chile", "Peru", "Panama");
const cantidadCiudades = ciudadesDisponibles.length;

console.log(`En la lista existen ${cantidadCiudades} elementos`);
console.log(`En la lista existen ${paisesDisponibles.length} elementos`);

//quitar le primer elemento del array 

ciudadesDisponibles.shift();
console.log(`En la lista existen ${paisesDisponibles.length} elementos`);
console.log(ciudadesDisponibles);
//quitar le ultimo elemento de un array

ciudadesDisponibles.pop();
console.log(`En la lista existen ${paisesDisponibles.length} elementos`);
console.log(ciudadesDisponibles);
//ordenar lista
console.log(ciudadesDisponibles.sort());

//posicion de un elemnto
console.log(`En la lista existen ${paisesDisponibles.indexOf("Peru")}`);

//concatenar dos listas 
const listaPaisesCiudades= paisesDisponibles.concat(ciudadesDisponibles);
console.log(listaPaisesCiudades);
