//Esercizio 1 - Palindroma, chiedere all'utente di inserire una parola

//Inserimento da parte dell'utente della parola
const parola = prompt(`Inserisci una parola`);

//Funzione per verificare se una parola è palindroma
function isPalindroma(stringa) {
  //ritorno del valore con i metodi reverse per l'inversione, split per trasformare la stringa in array, join per ricomporre la parola
  return stringa === stringa.split(``).reverse().join(``);
}

//Mostro il risultato a video
if (isPalindroma(parola)) {
  console.log(`La parola è palindroma!`);
} else {
  console.log(`La parola non è palindroma!`);
}


//Esercizio 2 - Pari o Dispari

//L'utente sceglie pari o dispari
const sceltaUtente = prompt(`Scegli pari o dispari`)

//L'utente inserisce un numero da 1 a 5
const numeroUtente = parseInt(prompt(`Inserisci un numero da 1 a 5`), 10);

//Generiamo un numero random (da 1 a 5) per il computer
function numeroRandom() {
  return Math.floor(Math.random() * 5) + 1;
}

const numeroComputer = numeroRandom();

//Procediamo con la somma dei due numeri
const somma = numeroUtente + numeroComputer;

//Attraverso una funzione stabiliamo se la somma è pari o dispari
function pariODispari(num) {
  return num % 2 === 0 ? `Pari` : `Dispari`;
}

const risultato = pariODispari(somma);
