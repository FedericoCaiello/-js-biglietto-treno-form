
var buttonGenera = document.getElementById("genera");
buttonGenera.addEventListener('click',
  function() {
    var nomeUtente = document.getElementById('nome-utente');
    var nome = nomeUtente.value;
    console.log(nome);

    var chilometriUtente = document.getElementById('chilometri-utente');
    console.log(chilometriUtente);

    var kmDaPercorrere = chilometriUtente.value;
    console.log(kmDaPercorrere);
      // // eta del passeggero
    var etaPasseggero = document.getElementById('eta-passeggero');
    var fasciaEta = etaPasseggero.value;
    console.log(fasciaEta);
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
      // document.getElementById('prezzo-biglietto').innerHTML ="Costo del Biglietto: " + costoBiglietto;
    }
  }
)
