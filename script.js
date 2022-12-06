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
let ticketPrice = document.getElementById('ticket-price');
const nameTicket = document.getElementById('name-ticket');
const typeTicket = document.getElementById('type-ticket');
const carriageNr = document.getElementById('carriage-nr');
const codeCp = document.getElementById('code-cp')

//General variables
const priceKm = 0.21;
console.log(priceKm);


// 2 - Aggancio ai button un event listener.
btnCreate.addEventListener('click', function () {
  // const name user
  const name = inputName.value;
  console.log(name);
  nameTicket.innerText = name;

  // const km user
  const km = parseInt(inputKm.value.trim());
  console.log(km); 
  let price = (km * priceKm);

  // const age user 
  const age = parseInt(inputAge.value.trim());
  console.log(age);

  let isValid = true;
  // ! Control
  if (isNaN(km) || km <= 0 || km > 2000) {
    isValid = false;
    alert('Devi inserire un numero di km tra 1 a 2000');
  }

  if (isNaN(age) || age <= 0 || age > 105) {
    isValid = false;
    alert("Devi inserire un'età tra 1 a 105");
  }

  if (isValid) {

  // 3 - Calcolo gli eventuali sconti
  if (age >= 65) {
    price *= 0.6;
  } else if (age < 18) {
    price *= 0.8;
  }

  // Variable ticket type
  const ticketType = 'Biglietto Standard';

  // Random number - carriage nr.
  const nrCarriage = Math.random();
  const nrCarriageSecond = Math.floor(nrCarriage*10) + 1;
  console.log(nrCarriageSecond);

  // Random number - code cp
  const cpCode = Math.random();
  const cpCodeSecond = Math.floor(cpCode*100000)+ 1;
  console.log(cpCodeSecond);


  // Print result in page
  console.log(price);
  ticketPrice.innerText = price.toFixed(2) + ' €';

  // Print variable ticket type in page 
  typeTicket.innerText = ticketType;

  // Print variable carriage nr in page
  carriageNr.innerText = nrCarriageSecond;

  // Print variable cp code in page
  codeCp.innerText = cpCodeSecond;
  }
});

btnReset.addEventListener('click', function () {
  // const name user
  inputName.value = '';

  // const km user
  inputKm.value = '';
  
  // const age user 
  inputAge.value = '';
});








