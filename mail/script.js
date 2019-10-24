var risultato = document.getElementById("mio_id");

//Chiedo la propria mail
var email = prompt("Inserisci la tua E-Mail");
console.log(email);
//Scrivo un elenco mail
var lista = ['mail0@outlook.it','mail1@outlook.it','mail2@outlook.it','mail3@outlook.it','mail4@outlook.it']
console.log(lista)
//Controllo che la mail stia nell'elenco
for (var i = 0; i < lista.length; i++) {

    if (lista[i] == email) {
      risultato.innerHTML = "La tua e-mail può accedere.";
      break;
    }
    else {
      risultato.innerHTML = "La tua e-mail non può accedere.";
    }
  }
