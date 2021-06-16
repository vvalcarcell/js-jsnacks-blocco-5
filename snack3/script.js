var num = [3, 4, 10];

var somma = 0;
for (i = 0; i < num.length; i++) {
    somma += num[i];
}
var media = somma / num.length;
console.log(media);

//---------------------------------------

var giocatori = [
    { nome: 'giacomo', cognome: 'rossi', anno: 2021, punteggio: 20 },
    { nome: 'andrea', cognome: 'rossi', anno: 2021, punteggio: 30 },
    { nome: 'marco', cognome: 'rossi', anno: 2021, punteggio: 40 }
]

for (x = 0; x < giocatori.length; x++) {
    for (var key in giocatori[x]) {
        document.getElementById('gamers').innerHTML += '<li>' + key + ': ' + giocatori[x][key] + '</li>';
    }
    document.getElementById('gamers').innerHTML += '</br>';
}

var punteggio = 0;
for (i = 0; i < giocatori.length; i++) {
    punteggio += giocatori[i].punteggio;
};

var result = punteggio / giocatori.length;
console.log(result);