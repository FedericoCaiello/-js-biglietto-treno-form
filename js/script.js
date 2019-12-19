var nomeCognomeUtente = prompt('inserisci il tuo nome e cognome');
console.log(nomeCognomeUtente)
document.getElementById('nome-utente').innerHTML ="Nome: " + nomeCognomeUtente;
// numero di chilometri da percorrere
var chilometriUtente = prompt("numero di chilometri da percorrere?");
console.log(chilometriUtente);
document.getElementById('chilometri-utente').innerHTML ="Km da percorrere: " + chilometriUtente;
// eta del passeggero
var etaPasseggero = prompt("quale' la tua eta'?");
console.log(etaPasseggero);
document.getElementById('eta-passeggero').innerHTML ="Anni del passeggero: " + etaPasseggero;
// prezzo totale del biglietto
var costoBiglietto = chilometriUtente * 0.21; // moltiplicazione, con il segno*
console.log(costoBiglietto);
// condizioni sconto Biglietto
if (etaPasseggero < 18){
  // minorenne sconto del 20%\
  console.log(costoBiglietto - (costoBiglietto * 20 / 100));
  alert("sconto 20%")
  document.getElementById('prezzo-biglietto').innerHTML ="Costo del Biglietto: " + (costoBiglietto - (costoBiglietto * 20 / 100));
  // over 65 anni di eta' sconto 40%
} else if (etaPasseggero >= 65) {
  alert("sconto 40%")
  console.log(costoBiglietto - (costoBiglietto * 40 / 100));
  document.getElementById('prezzo-biglietto').innerHTML ="Costo del Biglietto: " + (costoBiglietto - (costoBiglietto * 40 / 100));
}
else {
  // nessuno sconto
  console.log(costoBiglietto)
  document.getElementById('prezzo-biglietto').innerHTML ="Costo del Biglietto: " + costoBiglietto;
}
