// Task 1
const btnSquareTheNumber = document.getElementById('btnSquareTheNumber');

btnSquareTheNumber.addEventListener('click', squareTheNumber);

function squareTheNumber() {
    const inputNumber = document.getElementById('number');
    const number = inputNumber.value;

    alert(`The square of ${number} is ${number * number}`);
}
