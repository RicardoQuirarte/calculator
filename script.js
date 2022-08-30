const screen = document.querySelector('#screen');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const plus = document.querySelector('#plus');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const minus = document.querySelector('#minus');

cero.addEventListener('click', showNumber);
one.addEventListener('click', showNumber);
two.addEventListener('click', showNumber);
three.addEventListener('click', showNumber);
four.addEventListener('click', showNumber);
five.addEventListener('click', showNumber);
six.addEventListener('click', showNumber);
seven.addEventListener('click', showNumber);
eight.addEventListener('click', showNumber);
nine.addEventListener('click', showNumber);
back.addEventListener('click', backFunction);
dot.addEventListener('click', dotDisable);

let displayValue = '';
let operator = '';
let clickOnce = 0;
let previousKey= '';

function calculate(n1, operator, n2) {
let result = '';
    if (operator === 'sum') {
        result = n1 + n2;
    } else if (operator === 'subtract') {
        result = n1 - n2;
    } else if (operator == 'multiply') {
        result = n1 * n2;
    } else if (operator == 'divide') {
        result = n1 / n2;
    }
    return result;
};

function showNumber(e) {
    displayValue = displayValue + `${e.target.innerText}`;
    screen.textContent = displayValue;
    previousKey = 'number';
    console.log(displayValue)
};

function backFunction() {
    displayValue = displayValue.slice(0, -1);
    screen.textContent = displayValue;
}

function dotDisable(e) {
    if (displayValue.includes('.')) {
        dot.classList.add('disable');
        return
     }
     showNumber(e);
};

function showKeyNumber(e) {
    if (e.key === 'Backspace') {
        backFunction();
        return
    }
    displayValue = displayValue + `${e.key}`;
    screen.textContent = displayValue;
    console.log(displayValue)
}

addEventListener('keydown', (e) => {
    showKeyNumber(e);
});




divide.addEventListener('click', () => {
    if (previousKey == 'operator' || previousKey == 'equal') {
        operator = 'divide';
        return
    }
    clickOnce++
    if (clickOnce == 1) {
        value = parseFloat(displayValue);
        operator = 'divide';
    } else if (clickOnce > 1) {
            secondValue = parseFloat(displayValue);
            value = calculate(value, operator, secondValue);
            screen.textContent = value;
            operator = 'divide';
        }
    displayValue = '';
    previousKey = 'operator'
});

multiply.addEventListener('click', () => {
    if (previousKey == 'operator' || previousKey == 'equal') {
        operator = 'multiply';
        return
    }
    clickOnce++
    if (clickOnce == 1) {
        value = parseFloat(displayValue);
        operator = 'multiply';
    } else if (clickOnce > 1) {
            secondValue = parseFloat(displayValue);
            value = calculate(value, operator, secondValue);
            screen.textContent = value;
            operator = 'multiply';
        }
    displayValue = '';
    previousKey = 'operator'
});

subtract.addEventListener('click', () => {
    if (previousKey == 'operator' || previousKey == 'equal') {
        operator = 'subtract';
        return
    }
    clickOnce++
    if (clickOnce == 1) {
        value = parseFloat(displayValue);
        operator = 'subtract';
    } else if (clickOnce > 1) {
            secondValue = parseFloat(displayValue);
            value = calculate(value, operator, secondValue);
            screen.textContent = value;
            operator = 'subtract';
        }
    displayValue = '';
    previousKey = 'operator'
});

sum.addEventListener('click', () => {
    if (previousKey == 'operator' || previousKey == 'equal') {
        operator = 'sum';
        return
    }
    clickOnce++
    if (clickOnce == 1) {
        value = parseFloat(displayValue);
        operator = 'sum';
    } else if (clickOnce > 1) {
            secondValue = parseFloat(displayValue);
            value = calculate(value, operator, secondValue);
            screen.textContent = value;
            operator = 'sum';
        }
    displayValue = '';
    previousKey = 'operator'
});

equal.addEventListener('click', () => {
    secondValue = parseFloat(displayValue);
    value = calculate(value, operator, secondValue);
    screen.textContent = value;
    displayValue = '';
    previousKey = 'equal';
});

clear.addEventListener('click', () => {
    displayValue= '';
    value= 0;
    secondValue= 0;
    screen.textContent = 0;
});