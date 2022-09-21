async function main() {
    /*
        This is not working, I think I need to learn async functions and promises for it to work
    */
    let firstNumber =  createNumber();
    clearDisplay()
    let secondNumber = createNumber();
    
}

function createNumber() {
    const buttons = createButtons();
    let number = ''

    let numberClicked = (e) => {
        number += e.target.id;
        changeDisplay(e.target.id)
    }

    let operatorClicked = (e) => {
        buttons.forEach(button => {
            button.removeEventListener('click', numberClicked)
            button.removeEventListener('click', operatorClicked)
        })
        return number
    }

    buttons.forEach(button => {
        if (['+', '-', '/', 'x'].includes(button.id)) {
            button.addEventListener('click', operatorClicked)
        } else {
            button.addEventListener('click', numberClicked)
        }
    })
}

function clearDisplay() {
    const numbersDisplay = document.querySelector('#numbers');
    numbersDisplay.innerHTML = '';
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
    const numbersDisplay = document.querySelector('#numbers');
    numbersDisplay.innerHTML += number;
}

