function main() {
}

function add(number, numberB) {
    return number + numberB
}

function subtract(number, numberB) {
    return number - numberB
}

function divide(number, numberB) {
    return number / numberB
}

function multiply(number, numberB) {
    return number * numberB
}

function operate(operator, numA, numB) {
    if (operator === 'add') {
        return add(numA, numB)
    } else if (operator === 'subtract') {
        return subtract(numA, numB)
    } else if (operator === 'divide') {
        return divide(numA, numB)
    } else if (operator === 'multiply') {
        return multiply(numA, numB)
    }

    return "error"
}

function createButtons() {
    return document.querySelectorAll('.calculator__element')
}

function changeDisplay(number) {
    document.querySelector('#numbers').innerHTML += number
}

function clearDisplay() {
    document.querySelector('#numbers').innerHTML = '';
}
