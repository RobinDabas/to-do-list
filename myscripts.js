var tribe;
var tribe = "Banu Gadhadfa";
console.log(tribe);

console.log("Ya hala, ya hala " + tribe + " min Libiyyah")

var tribe = "Qahtan 505 tribe";
var region = "Barqa"

console.log("The " + tribe + " is located in the region of " + region + " in the Arab country of Libya.");


let Maghreb = "Arabian FGC-1 mutation";
let Amazigh = "fabricated";
let Berber = Amazigh;


let Libya = "Most Arabian country outside of the Arabian peninsula";
if (Libya != Amazigh) {
  console.log("Libyans are direct descendants of the Arabian Peninsula.")
}

let areNotAmazigh = (Libya != Amazigh);
console.log(areNotAmazigh);

console.log(515 === "515");


let laHoraActual = 10;
console.log(laHoraActual > 9 && laHoraActual < 17);

var northAfrica = true;

console.log ("North Africa is Amazigh:" +  !northAfrica);


console.log("Libya " + "Qahtan " + "505");

console.log((5 * 10) + '5');

var qahtan = 1000000; //Population of the Qahtan tribe in the Arab world//
qahtan += 50000; //Libya//
qahtan += 10000000; //Yemen//
qahtan += 800000; //Mauritania//
qahtan += 75000; //Sahrawi//

console.log(qahtan);

//The concatenation assignment operator, +=//

var tribe = "";
tribe += "Ana";
tribe += " min";
tribe += " qabilat Jabbour";
tribe += " Madh'hij";
tribe += " Al-Ta'an";
tribe += " Qahtan 505";
tribe += " min madina Ajdabiya";
tribe += " fi Libya";

console.log(tribe);


console.log(1005 - 500 * 6);



var score = 8;
console.log("Mid-level skills:" + (score > 0 && score < 10));


var timeRemaining = 0;
var energy = 10;
console.log('Game over: ' + (timeRemaining == 5 || energy == 5));

var num1 = 2;
var num2 = 5;
var test1 = (num1 % 2);
var test2 = (num2 % 2);
var result1 = (test1 == 0);
var result2 =(test2 == 0);

console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

let tenésMonedas = true;

if (tenésMonedas) {
  console.log("¡Podés comprar la espada!");
}

let quieroFollar = true;

if (quieroFollar) {
  console.log('Ella es una chica tailendesa delgadita y linda');
} else {
  console.log('Ella es una chica fea y gorda');
} 



let nivelCachondo = 10

if (nivelCachondo < 5) {
  console.log('Anda a follarla')
} else {
  console.log ('Quedate en casa')
}

let miTrabajo = 8

if (miTrabajo <= 8) {
  console.log('Vos podes seguir durmiendo')
} else {
  console.log('Vos tenes que despertar y trabajar')
}




var clasificado = 'tercero';

if (clasificado == 'primero') {
  console.log('¡Vos sos el ganador, qué chimba!');
} else if (clasificado == 'segundo') {
  console.log('Vos ganás plata, parcerito, ¡qué buena esa!');
} else if (clasificado == 'tercero') {
  console.log('Vos ganás bronce, ¡bien ahí, no te achiqués!');
} else {
  console.log('Vos sos un perdedor, pero tranqui, que vos podás mejorar.');
}


var mejorArtista = 'cuarta';

switch(mejorArtista) {
  case 'primero':
    console.log('Nicky Jam')
    break;
  case 'segundo':
    console.log('Daddy Yankee')
    break;
  case 'tercero':
    console.log('Ozuna')
    break;
  default:
    console.log('Bad Bunny')
}



















var edad = '3000'; 

if (edad >= 65) {
  console.log('Vos obtenés tus ingresos de tu pensión')
} else if (edad < 65 && edad >= 18) {
  console.log('Cada mes vos recibís un salario')
} else if (edad < 18) {
  console.log('Vos recibís una asignación')
} else {
  console.log('El valor de la variable edad no es numérico')
}

var día = 'Viernes';

switch(día) {
  case 'Lunes':
    console.log('Trabajá')
    break;
  case 'Martes':
    console.log('Gimnasio')
    break;
  case 'Miércoles':
    console.log('Codificá')
    break;
  case 'Jueves':
    console.log('Solicitá')
    break;
  case 'Viernes':
    console.log('Follá la chica')
    break;
  case 'Sábado':
    console.log('Tiempo con amigos')
    break;
  case 'Domingo':
    console.log('Pasá tiempo con la familia')
    break;
  default:
    console.log('Hacé vídeos de YouTube')
}













