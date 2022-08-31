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