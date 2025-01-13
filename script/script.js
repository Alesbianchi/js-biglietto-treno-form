// Scrivere un programma che chieda all’utente: - Il numero di chilometri da percorrere - Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form completo in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).



// INPUT

// l'utente inserisce il suo nome
const field = document.getElementById('username');

// l'utente inserisce la sua età
const titleField = document.getElementById('title-field');

// l'utente inserisce il numero di km
const distance = document.getElementById('distance');

// l'utente preme il tasto genera
const button = document.getElementById('generate-button');

// OUTPUT
const userNameDisplay = document.getElementById('user-name');
const offerTypeDisplay = document.getElementById('offer-type');
const finalPriceDisplay = document.getElementById('final-price');






// il PC restituisce un numero
button.addEventListener('click', (event) => {
    event.preventDefault();

    // ottengo i valori inseriti dall'utente
    const userAge = titleField.value;
    const userDistance = distance.value; 
    const userName = field.value; 
    // console.log(userAge);
    // console.log(distance.value);

    // ELABORAZIONE
    let prezzoPc = 0.21 * userDistance;

    // verifico lo sconto in base all'età
    let risultato;
    let offerta;

    // SE inferiore a 18 applico 20% Sconto 
    if (userAge === "minorenne") {
    risultato = prezzoPc - (prezzoPc * 0.20);
    offerta = "Minorenne - 20% di sconto";
    
    
    // SE ALTRIMENTI superiore a 65 applico 40% Sconto
}   else if (userAge === "over"){
    risultato = prezzoPc - (prezzoPc * 0.40); 
    offerta = "Over 65 - 40% di sconto";
    
    
}   else{
    // ALTRIMENTI prezzo pieno (0.21 € al km)
    risultato = prezzoPc;
    offerta = "Maggiorenne - Prezzo pieno";
}

// Aggiorna il contenuto della pagina con i risultati
userNameDisplay.textContent = userName || "Nome non inserito";
offerTypeDisplay.textContent = offerta;
finalPriceDisplay.textContent = `${risultato.toFixed(2)} €`; 

});



