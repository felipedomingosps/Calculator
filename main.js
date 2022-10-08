/* FUNCTIONS */ 
function add(numberA, numberB) {
    return Number(numberA) + Number(numberB)
}

function subtract(numberA, numberB) {
    return Number(numberA) - Number(numberB)
}

function divide(numberA, numberB) {
    return Number(numberA) / Number(numberB)
}

function multiply(numberA, numberB) {
    return Number(numberA) * Number(numberB)
}

function operate(operator, numA, numB) {
    if (operator === '+') {
        return add(numA, numB)
    } else if (operator === '-') {
        return subtract(numA, numB)
    } else if (operator === '/') {
        return divide(numA, numB)
    } else if (operator === 'x') {
        return multiply(numA, numB)
    }

    return "error"
}

function createNumberButtons() {
    return document.querySelectorAll('.calculator__element--number').forEach(button => {
        button.addEventListener('click', e => {
                if (calculator.firstNumber === NaN || calculator.secondNumber === NaN) {
                    reset()
                    return
                }
                if (calculator.operationIsFinished === true) {
                    reset()
                    return
                }
                if (calculator.firstNumberIsDone === true && calculator.secondNumberIsDone === true) {
                    reset()
                } else if (e.target.dataset.number != null) {
                    changeDisplay(e.target.dataset.number)
                }
                
        })
    })
}

function createOperatorButtons() {
    return document.querySelectorAll('.calculator__element--operator').forEach(button => {
        button.addEventListener('click', e => {
                if (calculator.firstNumber === NaN || calculator.secondNumber === NaN) {
                    reset()
                    return
                } else if (calculator.operationIsFinished === true) {
                    saveNumber('first', e)
                    parcialReset()
                    calculator.operatorPressed = e.target.dataset.operator;
                    return
                } else if (calculator.firstNumberIsDone === false) {
                    saveNumber('first', e)
                } else {
                    saveNumberConcatenate('first', e)
                }
        })
    })
}

function createEqualsButtons() {
    document.querySelector('.calculator__element--equals').addEventListener('click', () => {
                if (calculator.firstNumber === NaN || calculator.secondNumber === NaN) {
                    reset()
                    return
                }
                if (calculator.operationIsFinished === true) {
                    reset()
                    clearDisplay()
                    return
                } else if (calculator.firstNumberIsDone === true) {
                    saveNumber('second')
                    replaceDisplay(operate(calculator.operatorPressed, calculator.firstNumber, calculator.secondNumber))
                }
                

                
        })
}

function changeDisplay(number) {
    document.querySelector('#numbers').innerHTML += number
}

function replaceDisplay(number) {
    document.querySelector('#numbers').innerHTML = number
}

function clearDisplay() {
    return document.querySelector('#numbers').innerHTML = '';
}

function saveNumber(whichNumber, e) {
    if (whichNumber === 'first') {
        calculator.firstNumber = parseInt(document.querySelector('#numbers').innerHTML);
        calculator.firstNumberIsDone = true;
        calculator.operatorPressed = e.target.dataset.operator
        clearDisplay()
    } else if (whichNumber === 'second') {
        calculator.secondNumber = parseInt(document.querySelector('#numbers').innerHTML);
        calculator.secondNumberIsDone = true;
        clearDisplay()

        calculator.operationIsFinished = true;
    }
    
}

function saveNumberConcatenate(whichNumber, e) {
    if (whichNumber === 'first') {
        calculator.firstNumber = operate(calculator.operatorPressed, parseInt(calculator.firstNumber), parseInt(document.querySelector('#numbers').innerHTML))
        calculator.firstNumberIsDone = true;
        calculator.operatorPressed = e.target.dataset.operator
        clearDisplay()
    }
}

function reset() {
    document.querySelector('#numbers').innerHTML = '0';
    calculator.firstNumber = 0,
    calculator.secondNumber = 0,
    calculator.firstNumberIsDone = false,
    calculator.secondNumberIsDone = false,
    calculator.operatorPressed = null;
    calculator.operationIsFinished = false;
}

function parcialReset() {
    calculator.secondNumber = 0,
    calculator.firstNumberIsDone = true,
    calculator.secondNumberIsDone = false,
    calculator.operationIsFinished = false;
}

/* APP */
let calculator = {
    firstNumber: 0,
    secondNumber: 0,
    firstNumberIsDone: false,
    secondNumberIsDone: false,
    operatorPressed: null,
    operationIsFinished: null
};

createNumberButtons()
createOperatorButtons()
createEqualsButtons()