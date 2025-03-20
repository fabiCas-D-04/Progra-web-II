const ciudadesDisponibles= new Array("Santiago", "Bogota", "Lima", "Monte Video");
const precioPasaje= new Array(200,300,100,400);
const presuDisponible=200;
let i=0;

while(precioPasaje[i]>presuDisponible && i< ciudadesDisponibles.length){
    i++;
}
if( i== ciudadesDisponibles.length){
    console.log('no existen pasajes')
}else{
    console.log('se puede comprar pasaje para: '+ciudadesDisponibles[i]);
}