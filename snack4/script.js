var table = '';
var htmlTable = document.getElementById('table');
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

table += "<thead>";
table += "<tr>";

for (var key in students[0]) {
    table += "<th>" + key.toUpperCase() + "</th>";
}
table += "</tr>";
table += "</thead>";

table += "<tbody>";
for (var i = 0; i < students.length; i++) {
    table += "<tr>";
    for (var key in students[i]) {
        table += "<td>" + students[i][key] + "</td>";
    }
    table += "</tr>";
};
table += "</tbody>";


htmlTable.innerHTML = table;



