console.log('JS OK');

/* Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/

/* 
1. Prendo gli elementi in pagina.
2. Aggancio ai button un event listener e calcolo il prezzo del biglietto.
3. Applico uno sconto del 20% ai minorenni (<18) e uno del 40% agli over 65 (>= 65).
4. Stampo le variabili nel DOM.
5. Effettuo un controllo sui dati inseriti dall'utente negli input.
*/

// 1 - Recupero gli elementi in pagina
const inputName = document.getElementById('name');
const inputKm = document.getElementById('km');
const inputAge = document.getElementById('age');
const btnCreate = document.getElementById('btn-create');
const btnReset = document.getElementById('btn-reset');
const nameTicket = document.getElementById('name-ticket');
let typeTicket = document.getElementById('type-ticket');
const carriageNr = document.getElementById('carriage-nr');
const codeCp = document.getElementById('code-cp');
let ticketPrice = document.getElementById('ticket-price');
const yourTicket = document.querySelector('.your-ticket');

//General variables
const priceKm = 0.21;
console.log(priceKm);


// 2 - Aggancio ai button un event listener.
btnCreate.addEventListener('click', function () {
  // const name user
  const name = inputName.value.trim();
  console.log(name);

  // const km user
  const km = parseInt(inputKm.value.trim());
  console.log(km); 
  let price = (km * priceKm);

  // const age user 
  const age = inputAge.value;
  console.log(age);

  // ! Control
  if (!name) { 
     alert('Devi inserire un nome di almeno due lettere');
     return;
  }

  if (isNaN(km) || km <= 0 || km > 2000) {
    alert('Devi inserire un numero di km tra 1 a 2000');
    return;
  }

  // Variable ticket type
  let ticketType = 'Tariffa Standard';

  // 3 - Calcolo gli eventuali sconti
  if (age === 'over') {
    price *= 0.6;
    ticketType = 'Tariffa Over 65'

  } else if (age === 'under') {
    price *= 0.8;
    ticketType = 'Tariffa Under 18'
  }


  // Random number - carriage nr.
  const nrCarriage = Math.random();
  const nrCarriageSecond = Math.floor(nrCarriage * 10) + 1;
  console.log(nrCarriageSecond);

  // Random number - code cp
  const cpCode = Math.random();
  const cpCodeSecond = Math.floor(cpCode*100000)+ 1;
  console.log(cpCodeSecond);



  // Print name in page
  nameTicket.innerText = name;

  // Print result in page
  console.log(price);
  ticketPrice.innerText = price.toFixed(2) + ' €';

  // Print variable ticket type in page 
  typeTicket.innerText = ticketType;

  // Print variable carriage nr in page
  carriageNr.innerText = nrCarriageSecond;

  // Print variable cp code in page
  codeCp.innerText = cpCodeSecond;

  

  // Show the ticket
  yourTicket.classList.remove('d-none');

});

btnReset.addEventListener('click', function () {
  // const name user
  inputName.value = '';

  // const km user
  inputKm.value = '10';
  
  // const age user 
  inputAge.value = '';


  // Hide the ticket
  yourTicket.classList.add('d-none');

});










