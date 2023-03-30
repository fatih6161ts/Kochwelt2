//Funktion Button Portionen berechnen
function changeAmount_1() {
    if ((portionen) => 1) {
      amount_berechnen();
    }
  }
  
  //Funktion Zutaten berechnen
  function amount_berechnen() {
    let portionen = +document.getElementById("user-input").value;
    let amount_portionen_2 = [100, 1, 1, 1, 30, 100];
    let amount_portionen;
  
    if (portionen < 1) {
      alert("Bitte eine gültige Zahl eingeben!")
      portionen = 1;
    } 
  
    amount_portionen = amount_portionen_2[0] * portionen;
    document.getElementById("ing-1").innerHTML = `${amount_portionen}`; //Basilikum
  
    amount_portionen = amount_portionen_2[1] * portionen;
    document.getElementById("ing-2").innerHTML = `${amount_portionen}`; //Knoblauchzehe
  
    amount_portionen = amount_portionen_2[2] * portionen;
    document.getElementById("ing-3").innerHTML = `${amount_portionen}`; //TL Salz
  
    amount_portionen = amount_portionen_2[3] * portionen;
    document.getElementById("ing-4").innerHTML = `${amount_portionen}`; //EL Hefeflocken
  
    amount_portionen = amount_portionen_2[4] * portionen;
    document.getElementById("ing-5").innerHTML = `${amount_portionen}`; //Gramm Pinienkerne

    amount_portionen = amount_portionen_2[5] * portionen;
    document.getElementById("ing-6").innerHTML = `${amount_portionen}`; //ml Olivenöl
  }