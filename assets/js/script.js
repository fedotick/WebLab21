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
