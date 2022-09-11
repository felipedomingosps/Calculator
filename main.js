function add(numberA, numberB) {
    return numberA + numberB
}

function subtract(numberA, numberB) {
    return numberA - numberB
}

function divide(numberA, numberB) {
    return numberA / numberB
}

function multiply(numberA, numberB) {
    return numberA * numberB
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
    const buttons = document.querySelectorAll('.calculator__element');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log(e.target.id)
        }) 
    })
}

function changeNumbers(number) {
    const numbersDisplay = document.querySelector('#numbers');
    numbersDisplay.innerHTML = number;
}