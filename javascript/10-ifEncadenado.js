const ciudadDestino="sucre";
const ciudadesDisponibles= new Array("Santiago", "Bogota", "Lima", "Monte Video");

let edadPasajero=17;
let compania=false;

if(edadPasajero >=18 || compania){
    if(ciudadDestino.indexOf(ciudadDestino)>-1){
        console.log('pasaje disponible')
    }else{
        console.log('ciudad no disponible')
    }
} else{
    if(edadPasajero >=16 && ciudadDestino=="sucre"){
        console.log('pasaje disponible')
    }else{
        console.log('pasaje no cumple las reglas ')
    }
}