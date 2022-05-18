
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.




// variabili

const sceltaGiocatore = prompt('Scegli se pari o dispari');
const numeroGiocatore = parseInt(prompt('Inserisci un numero da 1 a 5'));
const numeroComputer = randomNumber(1, 5);
const sommaNumeri = sum(numeroGiocatore, numeroComputer);
const vittoria = isEvenOrOdd(numeroGiocatore, numeroComputer);


// funzioni


// numeri random per il computer
function randomNumber(min, max) {
   
    const randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
    
}


// somma
function sum(numeroGiocatore, numeroComputer) {
    return numeroGiocatore + numeroComputer;
}

alert("La somma è: " + sommaNumeri);


// pari o dispari
function isEvenOrOdd(numeroGiocatore, numeroComputer) {
    console.log(sommaNumeri);
    if (sommaNumeri % 2 == 0) {
        return alert('La somma è pari');
    } else {
        return alert('La somma è dispari');
    }    
};

// if (vittoria == sceltaGiocatore) {
//     console.log('Hai vinto!');
//     alert("Hai Vinto!");
// } else {
//     console.log('Ha vinto il computer!');
//     alert("Ha vinto il computer!");
// }