var students = [
    { name: 'Pippo', surname: 'Baudo', age: 80, description: '' },
    { name: 'Otto', surname: 'Bisotto', age: 70, description: '' },
    { name: 'Paolino', surname: 'Paperino', age: 80, description: '' }
];

for (i = 0; i < students.length; i++) {
    var nameStudent = students[i].name;
    students[i].description = prompt('Aggiungi la descrizione dello studente ' + nameStudent);
};

console.log(students);

var divList = document.getElementById('list');
for (i = 0; i < students.length; i++) {
    for (var key in students[i]) {
        divList.innerHTML += '<li>' + key + ': ' + students[i][key] + '</li>';
    };
    divList.innerHTML += '</br>';
};