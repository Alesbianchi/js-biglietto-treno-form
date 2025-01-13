// Scrivere un programma che chieda all’utente: - Il numero di chilometri da percorrere - Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form completo in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).



// INPUT

// l'utente inserisce la sua età
const field = document.getElementById('userage');


// l'utente inserisce il numero di km
const distance = document.getElementById('distance');

// l'utente preme il tasto genera
const button = document.querySelector('button');



// il PC restituisce un numero
button.addEventListener('click', () => {
    const userAge = field.value;
    console.log(userAge);
    console.log(distance.value);

    // ELABORAZIONE
    let prezzoPc = 0.21 * distance.value;

    // verifico l'eta dell'utente
    let risultato;

    // SE inferiore a 18 applico 20% Sconto 
    if (userAge < 18) {
    risultato = prezzoPc - (prezzoPc * 0.20);
    
    
    // SE ALTRIMENTI superiore a 65 applico 40% Sconto
}   else if (userAge > 64){
    risultato = prezzoPc - (prezzoPc * 0.40); 
    
    
}   else{
    // ALTRIMENTI prezzo pieno (0.21 € al km)
    risultato = prezzoPc;
}

console.log(risultato) 

});



