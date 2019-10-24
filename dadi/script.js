var risultato = document.getElementById("mio_id");
var punteggiocpu1 = document.getElementById("cpu1");
var punteggiocpu2 = document.getElementById("cpu2");
var cpu1, cpu2
//cpu1 lancia il dado
cpu1 = Math.floor((Math.random()* 12 + 1));
punteggiocpu1.innerHTML = "Punteggio cpu1: " + cpu1;
console.log(cpu1);
//cpu2 lancia il dado
cpu2 = Math.floor((Math.random()* 12 + 1));
punteggiocpu2.innerHTML = "Punteggio cpu1: " + cpu2;
console.log(cpu2);
//vince il risultato più alto
if (cpu1 == cpu2) {
    risultato.innerHTML = "Pareggio!";
} 
else if (cpu1 > cpu2) {
    risultato.innerHTML = "Cpu1 ha vinto!";
} else {
    risultato.innerHTML = "Cpu2 ha vinto!";
}