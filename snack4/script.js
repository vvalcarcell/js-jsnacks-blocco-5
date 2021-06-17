let students = [
    { name: 'Pippo', surname: 'Baudo', age: 80, description: '' },
    { name: 'Otto', surname: 'Bisotto', age: 70, description: '' },
    { name: 'Paolino', surname: 'Paperino', age: 80, description: '' }
];

for (let i = 0; i < students.length; i++) {
    let nameStudent = students[i].name;
    students[i].description = prompt('Aggiungi la descrizione dello studente ' + nameStudent);
};

console.log(students);

//-----------------------------------

const tableHTML = document.querySelector('.table-container');

let thead = `<ul>`;
for (let key in students[0]) {
    thead += `<li>${key.toUpperCase()}</li>`;
}
thead += `</ul>`;
tableHTML.innerHTML += thead;


for (let x = 0; x < students.length; x++) {

    const { name, surname, age, description } = students[x];

    tableHTML.innerHTML += `
        <ul>
            <li>${name}</li>
            <li>${surname}</li>
            <li>${age}</li>
            <li>${description}</li>
       </ul>
    `
};



