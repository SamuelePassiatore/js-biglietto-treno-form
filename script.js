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
2. Aggancio ai button un event listener.
3.
4. Calcolo il prezzo totale del viaggio.
5. Applico uno sconto del 20% ai minorenni (<18) e uno del 40% agli over 65 (>= 65).
4.

*/

// 1 - Recupero gli elementi in pagina
const inputName = document.getElementById('name');
const inputKm = document.getElementById('km');
const inputAge = document.getElementById('age');
const btnCreate = document.getElementById('btn-create');
const btnReset = document.getElementById('btn-reset');
let ticketPrice = document.getElementById('ticket-price');

// 2 - Aggancio ai button un event listener.
btnCreate.addEventListener('click', function () {
  // const name user
  const name = inputName.value;
  console.log(name);

  // const km user
  const km = parseInt(inputKm.value.trim());
  console.log(km);

  // const age user 
  const age = parseInt(inputAge.value.trim());
  console.log(age);
});

btnReset.addEventListener('click', function () {
  // const name user
  inputName.value = '';

  // const km user
  inputKm.value = '';
  
  // const age user 
  inputAge.value = '';
});















