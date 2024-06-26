// Task 1
const btnSquareTheNumber = document.getElementById('btnSquareTheNumber');

btnSquareTheNumber.addEventListener('click', squareTheNumber);

function squareTheNumber() {
    const inputNumber = document.getElementById('inputNumber');
    const number = inputNumber.value;

    alert(`The square of ${number} is ${number * number}`);
}

// Task 2
const btnSwap = document.getElementById('btnSwap');

btnSwap.addEventListener('click', swapValues);

function swapValues() {
    const inputFirst = document.getElementById('inputFirst');
    const inputSecond = document.getElementById('inputSecond');

    [inputFirst.value, inputSecond.value] = [inputSecond.value, inputFirst.value];
}

// Task 3
const inputColor = document.getElementById('inputColor');

inputColor.addEventListener('input', changeParagraphColor);

function changeParagraphColor() {
    const paragraph = document.getElementById('paragraph');

    paragraph.style.color = inputColor.value;
}

// Task 4
const tablePeople = document.getElementById('tablePeople');
const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click', addNewEntry);

function addNewEntry() {
    const inputFirstName = document.getElementById('inputFirstName');
    const inputSecondName = document.getElementById('inputSecondName');

    const newRow = tablePeople.insertRow()

    const cellFirstName = newRow.insertCell();
    const cellSecondName = newRow.insertCell();

    cellFirstName.textContent = inputFirstName.value;
    cellSecondName.textContent = inputSecondName.value;
}

tablePeople.addEventListener('click', insertValueInCell);

function insertValueInCell(event) {
    const target = event.target; 

    if (target.tagName != 'TD') return; 

    target.textContent = prompt('Enter a value in a cell: ');
}

// Task 5
const inputN = document.getElementById('inputN');
const inputM = document.getElementById('inputM');
const tableRandomNumbers = document.getElementById('tableRandomNumbers');

inputN.addEventListener('input', fillTableWithRandomNumbers);
inputM.addEventListener('input', fillTableWithRandomNumbers);

function fillTableWithRandomNumbers() {
    tableRandomNumbers.innerHTML = '';

    const maxNumber = 100;

    const n = inputN.value;
    const m = inputM.value;

    for(let i = 0; i < n; i++) {
        const newRow = tableRandomNumbers.insertRow()

        for(let j = 0; j < m; j++) {
            const newCell = newRow.insertCell();
            newCell.textContent = getRandomInt(maxNumber);
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Task 6
const countriesWithCities = {
    'Switzerland': ['Crissier', 'Horw', 'Leuk', 'Martigny', 'Morges'],
    'Canada': ['Fernie', 'Nelson', 'Rossland', 'Trail', 'Vernon'],
    'Sweden': ['Sweden', 'Falun', 'Hjo', 'Kalmar', 'Kumla'],
    'Japan': ['Inuyama', 'Chita', 'Aisai', 'Kazuno', 'Oga'],
    'Germany': ['Berlin', 'Essen', 'Bremen', 'Rostock', 'Solingen']
};

const selectCountry = document.getElementById('selectCountry');
const countries = Object.keys(countriesWithCities);
const options = ['Select country...'];
options.push(...countries);

fillSelect(selectCountry, options);

function fillSelect(select, options) {
    select.innerHTML = '';

    options.forEach(option => {
        const newOption = document.createElement('option');
        newOption.textContent = option;
        select.appendChild(newOption);
    });
}

selectCountry.addEventListener('change', updateSelectCities);

function updateSelectCities() {
    let selectCity = document.getElementById('selectCity');

    if (!selectCountry.selectedIndex) {
        if (selectCity) {
            const labelCity = document.getElementById('labelCity');

            labelCity.remove();
            selectCity.remove();
        }

        return;
    }

    if (!selectCity) {
        createSelectCities();
        selectCity = document.getElementById('selectCity');
    }

    const selectedCountry = selectCountry.value;
    const cities = countriesWithCities[selectedCountry];
    const options = ['Select city...'];
    options.push(...cities);
    
    fillSelect(selectCity, options);
}

function createSelectCities() {
    const newLabel = document.createElement('label');
    newLabel.id = 'labelCity';
    newLabel.textContent = "City:";

    const newSelect = document.createElement('select');
    newSelect.id = 'selectCity';

    const divTask6 = document.getElementById('task6');
    divTask6.append(newLabel);
    divTask6.append(newSelect);
}
