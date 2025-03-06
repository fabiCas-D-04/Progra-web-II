const frase = "El colega fito no sabe como comer tirubonsin a la parrilla";
const palabras = frase.split(' ');
let palabraLarga = "";

for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > palabraLarga.length) {
        palabraLarga = palabras[i];
    }
}

console.log(palabraLarga);