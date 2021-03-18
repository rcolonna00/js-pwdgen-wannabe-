//chiedere il nome all'utente
var nomeUtente = prompt( 'Dimmi il tuo nome' );
//console. log( nomeUtente );

//chiedere il cognome dell'utente
var cognomeUtente = prompt( 'Dimmi il tuo cognome' );
//console. log( cognomeUtente );

alert( 'Ciao ' + nomeUtente + ' ' + cognomeUtente);

//chiedere il colore preferito
var coloreUtente = prompt( 'Dimmi il tuo colore preferito' );
//console. log( coloreUtente );

var annoAttuale = 21;
//console. log( annoAttuale )

var password = nomeUtente + cognomeUtente + coloreUtente + annoAttuale ;
//console. log( password );
var messaggioFinale = ( 'Allora la tua password è... ' + password );
alert( messaggioFinale );

document.getElementById( 'password' ).innerHTML =  messaggioFinale ;