const screen = document.querySelector('#screen');


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
divide.addEventListener('click', operate);
multiply.addEventListener('click', operate);
subtract.addEventListener('click', operate);
sum.addEventListener('click', operate);

equal.addEventListener('click', () => {
    secondValue = parseFloat(displayValue);
    value = calculate(value, operator, secondValue);
    screen.textContent = value;
    displayValue = '';
    previousKey = 'equal';
});

clear.addEventListener('click', () => {
    displayValue = '';
    value = 0;
    secondValue = 0;
    clickOnce = 0;
    screen.textContent = 0;
});

let displayValue = '';
let operator = '';
let clickOnce = 0;
let previousKey= '';

function operate (e) {
    if (previousKey == 'operator' || previousKey == 'equal') {
        operator = `${e.target.id}`;
        return
    }
    if (clickOnce == 0) {
        value = parseFloat(displayValue);
        operator = `${e.target.id}`;
        clickOnce++
    } else if (clickOnce > 0) {
            secondValue = parseFloat(displayValue);
            value = calculate(value, operator, secondValue);
            screen.textContent = value;
            operator = `${e.target.id}`;
        }
    displayValue = '';
    previousKey = 'operator'
}

function calculate(n1, operator, n2) {
    if (n2 == 0) {
    return 'You can\'t divide by 0!'
    } if (operator === 'sum') {
        return n1 + n2;
    } else if (operator === 'subtract') {
        return n1 - n2;
    } else if (operator == 'multiply') {
        return n1 * n2;
    } else if (operator == 'divide') {
        return n1 / n2;
    }
};

function showNumber(e) {
    displayValue = displayValue + `${e.target.innerText}`;
    screen.textContent = displayValue;
    previousKey = 'number';
    if(displayValue.length > 19) {
        displayValue = displayValue.substring(0,19);
    }
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


addEventListener('keypress', keyboardSupport);

function keyboardSupport(e) {
    if (e.key === 'Backspace') {
        backFunction();
        return
    } else if (e.key >= 0 && e.key <= 9) {
        displayValue = displayValue + `${e.key}`;
        screen.textContent = displayValue;
        previousKey = 'number';
    } else if (['/', '*', '-', '+'].includes(e.key)) {
        operateWithKey(e);
    } else if (e.key == 'Enter') {
        secondValue = parseFloat(displayValue);
        value = calculateWithKey(value, operator, secondValue);
        screen.textContent = value;
        displayValue = '';
        previousKey = 'equal';
    } else if (e.key == '.') {
        displayValue = displayValue + `${e.key}`;
        screen.textContent = displayValue;
    }
}

let keyOnce = 0;

function operateWithKey (e) {
    if (previousKey == 'operator' || previousKey == 'equal') {
        operator = `${e.key}`;
        return
    }
    if (keyOnce == 0) {
        value = parseFloat(displayValue);
        operator = `${e.key}`;
        keyOnce++
    } else if (keyOnce > 0) {
            secondValue = parseFloat(displayValue);
            value = calculateWithKey(value, operator, secondValue);
            screen.textContent = value;
            operator = `${e.key}`;
        }
    displayValue = '';
    previousKey = 'operator'
}

function calculateWithKey(n1, operator, n2) {
    if (n2 == 0) {
    return 'You can\'t divide by 0!'
    } if (operator === '+') {
        return n1 + n2;
    } else if (operator === '-') {
        return n1 - n2;
    } else if (operator == '*') {
        return n1 * n2;
    } else if (operator == '/') {
        return n1 / n2;
    }
};
