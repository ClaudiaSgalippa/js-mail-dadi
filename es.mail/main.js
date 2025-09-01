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
    "alerto.longobardi@genericmail.com"
];

//RICHIESTA E-MAIL UTENTE

const emailUtente = prompt("Inserisci la tua e-mail qui sotto");

//CHECK E-MAIL

if (emailUtente)

//MESSAGGIO ESITO CHECK SI/NO