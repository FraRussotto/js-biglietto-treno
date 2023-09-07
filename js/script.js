/* Savlo i prompt dell'utente (età e km),
  Dichiaro la variabile col prezzo al km del viaggio
  Creo l'IF per stabilire in quale range di età rientra l'utente*/


const distance = prompt('Inserisci i km da percorrere');
const age = prompt('Inserisci la tua età');
const km_price = 0.21;
let final_price;


if(age < 18){
     console.log(final_price = (distance * km_price) + 10);
}
else if(age >= 18 && age < 65){
     console.log(final_price = (distance * km_price) + 5);
}
else{
     console.log(final_price = (distance * km_price) + 15);
}