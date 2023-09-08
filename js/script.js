/* Salvo i prompt dell'utente (età e km),
  Dichiaro la variabile col prezzo al km del viaggio
  Creo l'IF per stabilire in quale range di età rientra l'utente*/

  const km_price = 0.21;
  const discount20 = 20;
  const discount40 = 40;

  let insertOk = true;
  let age;
  let message;
  let discountMessage = ``;

  const distance = parseInt(prompt('Inserisci la distanza da percorrere'))

  if(isNaN(distance)){
    insertOk = false;
    message = 'Il dato sulla distanza non è corretto';
  }else{
    age = parseInt(prompt(`Inserisci la tua età`));
    
    if(isNaN(age)){
    insertOk = false;
    message = 'Il dato sull\'età non è corretto';
  }
  }
  if(insertOk){

    const price = distance * km_price;
    let final_price = price;

    if(age < 18){
      final_price *= 1 - (discount20 / 100);
      discountMessage = `<h2>Essendo minorenne hai uno sconto del 20&percnt; quindi pagherai ${final_price} anzichè ${price}</h2>`;

    }else if(age >= 65){
      final_price *= 1 - (discount40 / 100); 
      discountMessage = `<h2>Essendo over 65 hai uno sconto del 40&percnt; quindi pagherai ${final_price} anzichè ${price}</h2>`;
    }    
    message = 'Il costo del biglietto è' + ' ' + price + '€';
  }
  
  
  document.getElementById('output').innerHTML = `
  ${message}
  ${discountMessage}`;