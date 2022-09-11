
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
    numbersDisplay.innerHTML = number;
}

/*
1
- variável {numeroA} é criada
- variável {operadorClicado} é criada
- escreve um número
- número aparece no display de forma dinâmica
- sabemos o fim do número ao apertar no botão 'operador'
- operador apertado é guardado dentro de {operadorClicado}
- número é guardado dentro de {númeroA}
*/

function dummy() {
    let numberA = "";
    let operatorIsClicked = false;
    const buttons = createButtons();

    buttons.forEach(button => {
        button.addEventListener('click', buttonClicked => {
            if (['+', '-', '/', 'x','='].includes(buttonClicked.target.id)) {
                
            } else {
                numberA += buttonClicked.target.id;
                console.log(numberA)
            } 
        })

    })

    if (operatorIsClicked == true) {
        return console.log('Number A - End')
    }
    
}
