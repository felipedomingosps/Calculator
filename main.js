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
        if (divide(numA, numB) === Infinity) {
            return 0
        }
        return divide(numA, numB)
    } else if (operator === 'x') {
        return multiply(numA, numB)
    }

    return "error"
}

function createNumberButtons() {
    return document.querySelectorAll('.calculator__element--number').forEach(button => {
        button.addEventListener('click', e => {
                if (document.querySelector('#numbers').innerHTML.length < 12) {
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
                    } else if(calculator.firstNumber == document.querySelector('#numbers').innerHTML) {
                         replaceDisplay(e.target.dataset.number.substring(0,12))
                    } else if (e.target.dataset.number != null) {
                        changeDisplay(e.target.dataset.number.substring(0,12))
                    }
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
                    calculator.operatorPressed = null;
                }
                

                
        })
}

function createClearButton() {
    document.querySelector('#clear').addEventListener('click', reset)
}

function leftZero() {
    if(document.querySelector('#numbers').innerHTML[0] === '0') {
        document.querySelector('#numbers').innerHTML = document.querySelector('#numbers').innerHTML.slice(1);
    }
}

function changeDisplay(number) {
    leftZero()
    document.querySelector('#numbers').innerHTML += number
    document.querySelector('#numbers').innerHTML = document.querySelector('#numbers').innerHTML.substring(0,12)
}

function replaceDisplay(number) {
    leftZero()
    document.querySelector('#numbers').innerHTML = number
    document.querySelector('#numbers').innerHTML = document.querySelector('#numbers').innerHTML.substring(0,12)
}



function clearDisplay() {
    return document.querySelector('#numbers').innerHTML = '0';
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
        document.querySelector('#numbers').innerHTML = calculator.firstNumber
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
createClearButton()