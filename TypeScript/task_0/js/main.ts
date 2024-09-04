interface Student {
    firstName: string,
    lasName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: 'James',
    lasName: 'Achol',
    age: 21,
    location: 'Nairobi'
}

const student2: Student = {
    firstName: 'John',
    lasName: 'Madol',
    age: 22,
    location: 'Nairobi'
}

const studentsList: Student[] = [student1, student2];
const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((student:Student): void => {
    const newRow: HTMLTableRowElement = table.insertRow();
	const newRowFirstName: HTMLTableCellElement = newRow.insertCell();
	const newRowLocation: HTMLTableCellElement = newRow.insertCell();
	newRowFirstName.innerHTML = student.firstName;
	newRowLocation.innerHTML = student.location;
})