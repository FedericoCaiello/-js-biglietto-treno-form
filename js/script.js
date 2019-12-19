var nomeCognomeUtente = document.getElementById('nome-utente');
console.log(nomeCognomeUtente)
// // numero di chilometri da percorrere
var chilometriUtente = document.getElementById('chilometri-utente');
console.log(chilometriUtente);
// // eta del passeggero
var etaPasseggero = document.getElementById('eta-passeggero');
console.log(etaPasseggero)
// // prezzo totale del biglietto
var costoBiglietto = chilometriUtente * 0.21; // moltiplicazione, con il segno*
console.log(costoBiglietto);
// // condizioni sconto Biglietto
if (etaPasseggero < 18){
//   // minorenne sconto del 20%
  console.log(costoBiglietto - (costoBiglietto * 20 / 100));
  alert("sconto 20%")
  document.getElementById('prezzo-biglietto').innerHTML ="Costo del Biglietto: " + (costoBiglietto - (costoBiglietto * 20 / 100));
//   // over 65 anni di eta' sconto 40%
} else if (etaPasseggero >= 65) {
  alert("sconto 40%")
  console.log(costoBiglietto - (costoBiglietto * 40 / 100));
  document.getElementById('prezzo-biglietto').innerHTML ="Costo del Biglietto: " + (costoBiglietto - (costoBiglietto * 40 / 100));
}
 else {
//   // nessuno sconto
  console.log(costoBiglietto)
  document.getElementById('prezzo-biglietto').innerHTML ="Costo del Biglietto: " + costoBiglietto;
}
