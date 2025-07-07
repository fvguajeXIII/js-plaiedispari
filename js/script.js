//Esercizio 1 - Palindroma, chiedere all'utente di inserire una parola

//Inserimento da parte dell'utente della parola
const parola = prompt(`Inserisci una parola`);

//Funzione per verificare se una parola è palindroma
function isPalindroma(stringa) {
  //ritorno del valore con i metodi reverse per l'inversione, split per trasformare la stringa in array, join per ricomporre la parola
  return stringa === stringa.split(``).reverse().join(``);
}
