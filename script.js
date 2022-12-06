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
2. Calcolo il prezzo totale del viaggio.
3. Applico uno sconto del 20% ai minorenni (<18) e uno del 40% agli over 65 (>= 65).
4.

*/


// 1 - Recupero gli elementi in pagina
const inputName = document.getElementById('name');
const inputKm = document.getElementById('km');
const inputAge = document.getElementById('age');
const btnCreate = document.getElementById('btn-create');
const btnReset = document.getElementById('btn-reset');
const ticketPrice = document.getElementById('ticket-price');







