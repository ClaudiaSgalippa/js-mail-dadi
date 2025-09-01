/*Mail
- Crea una lista di email di invitati ad una festa.
- Chiedi all’utente la sua email,
- Controlla che sia nella lista di chi può accedere,
- Stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
‼️ Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email*/

//CREAZIONE ARRAY CON LISTA E-MAIL

const emailList = [
    "luca.santerini@genericmail.com",
    "claudia.sgalippa@genericmail.com",
    "luna.valentini@genericmail.com",
    "manuel.visconti@genericmail.com",
    "eleonora.belli@genericmail.com",
    "alessandro.belli@genericmail.com",
    "alessio.dipietro@genericmail.com",
    "silvia.petula@genericmail.com",
    "alerto.longobardi@genericmail.com",
    "sara.dagapito@genericmail.com"
];

//RICHIESTA E-MAIL UTENTE

const emailUtente = prompt("Inserisci la tua e-mail qui sotto"); //Richiesta e-mail

//CHECK E-MAIL

let inList = false; //valore booleano true/false

for(let i = 0; i < emailList.length; i++) { //Condizione

    if (emailList[i] === emailUtente) { //Confronto
        inList = true; //Check
        break; //Chiusura del cycle
    }
}

//MESSAGGIO ESITO CHECK SI/NO

if(inList) {
    console.log("Benvenuto, hai avuto accesso alla festa!") //Risultato positivo

} else {
    console.log("Mi dispiace, non hai accesso alla festa..") //Risultato negativo
}