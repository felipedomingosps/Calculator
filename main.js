/* FUNCTIONS */ 
function add(numberA, numberB) {
    return Number(numberA) + Number(numberB)
}

function subtract(numberA, numberB) {
    return Number(numberA) + Number(numberB)
}

function divide(numberA, numberB) {
    return Number(numberA) + Number(numberB)
}

function multiply(numberA, numberB) {
    return Number(numberA) + Number(numberB)
}

function operate(operator, numA, numB) {
    if (operator === '+') {
        return add(numA, numB)
    } else if (operator === '-') {
        return subtract(numA, numB)
    } else if (operator === '/') {
        return divide(numA, numB)
    } else if (operator === '*') {
        return multiply(numA, numB)
    }

    return "error"
}

function createNumberButtons() {
    return document.querySelectorAll('.calculator__element--number').forEach(button => {
        button.addEventListener('click', e => {
                if (e.target.dataset.number != null) {
                    changeDisplay(e.target.dataset.number)
                }
                
        })
    })
}

function createOperatorButtons() {
    return document.querySelectorAll('.calculator__element--operator').forEach(button => {
        button.addEventListener('click', e => {
                if (e.target.dataset.operator != '=') {
                    if (calculator.firstNumberIsDone === false) {
                        calculator.firstNumber = document.querySelector('#numbers').innerHTML
                        calculator.firstNumberIsDone = true;
                        calculator.operatorPressed = e.target.dataset.operator
                        clearDisplay()
                    } else {
                        calculator.secondNumber = document.querySelector('#numbers').innerHTML
                        calculator.secondNumberIsDone = true;
                        clearDisplay()
                    }
                } else {
                    changeDisplay(operate(calculator.operatorPressed, calculator.firstNumber, calculator.secondNumber))
                }
                
        })
    })
}



function changeDisplay(number) {
    document.querySelector('#numbers').innerHTML += number
}

function clearDisplay() {
    return document.querySelector('#numbers').innerHTML = '';
}

/* APP */
let calculator = {
    firstNumber: 0,
    secondNumber: 0,
    firstNumberIsDone: false,
    secondNumberIsDone: false,
    operatorPressed: null
};

createNumberButtons()
createOperatorButtons()