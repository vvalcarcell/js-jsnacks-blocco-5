var palla = {
    nome: 'Chiara',
    peso: 10
}

palla.peso = prompt('Inserisci il peso');
console.log(palla);

var giochi = [];
giochi.push(palla);

var newName = prompt('Inserisci il nome del nuovo gioco');
var newPeso = prompt('Inserisci il peso');
giochi.push({
    nome: newName,
    peso: newPeso
});

console.log(giochi);