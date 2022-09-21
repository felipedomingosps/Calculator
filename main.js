function main() {
    let numberA = "";
    const buttons = createButtons();

    let numberClicked = (e) => {
        numberA += e.target.id;
        changeNumbers(e.target.id)
    }

    let operatorClicked = (e) => {
        buttons.forEach(button => {
            button.removeEventListener('click', numberClicked)
            button.removeEventListener('click', operatorClicked)
        })
        return numberA
    }

    buttons.forEach(button => {
        if (['+', '-', '/', 'x','='].includes(button.id)) {
            button.addEventListener('click', operatorClicked)
        } else {
            button.addEventListener('click', numberClicked)
        }
    })
}


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
    return document.querySelectorAll('.calculator__element')
}

function changeNumbers(number) {
    const numbersDisplay = document.querySelector('#numbers');
    numbersDisplay.innerHTML += number;
}

