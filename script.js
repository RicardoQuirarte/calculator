function add(displayValue) {
    let value = displayValue;
    displayValue = "";
};


function subtract(a, b) {
	return a - b;
};

function multiply(a, b) {
    return a * b;
  };

function divideNum(a, b) {
    return a / b;
};

function operate(value, displayValue) {
    sum(a, b);
    


    const result = document.createElement('div');
    result.textContent = sum;
    screen.appendChild(result);
};



const screen = document.querySelector('#screen');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const plus = document.querySelector('#plus');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const minus = document.querySelector('#minus');

let displayValue = '';

function showNumber(e) {
    displayValue = displayValue + `${e.target.innerText}`;
    screen.textContent = displayValue;
    console.log(displayValue)
};

function backFunction() {
    displayValue = displayValue.slice(0, -1);
    screen.textContent = displayValue;
}

function dotDisable(e) {
    if (displayValue.indexOf('.') > -1) {
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

let clickOnce = 0;
let clickSum = 0;
let clickRest = 0;
let clickMultiply = 0;
let clickDivide = 0;

plus.addEventListener('click', () => {
    sum++
    clickOnce++
    if (clickOnce == 1) {
        value = parseInt(displayValue);
        displayValue = '';
    }
        else if (clickOnce > 1) {
            secondValue = parseInt(displayValue);
            value = value + secondValue;
            screen.textContent = value;
            ;
        }
    displayValue = '';
});


minus.addEventListener('click', () => {
    rest++
    clickOnce++
    if (clickOnce == 1) {
        value = parseInt(displayValue);
        displayValue = '';
    }
        else if (clickOnce > 1) {
            secondValue = parseInt(displayValue);
            value = value - secondValue;
            screen.textContent = value;
            ;
        }
    displayValue = '';
});

equal.addEventListener('click', () => {
    secondValue = parseInt(displayValue);
    if (clickSum > 0) {
        value = value + secondValue;
    };
    if (clickRest > 0) {
        value = value - secondValue;
    };
    if (clickMultiply > 0) {
        value = value * secondValue;
    };
    if (clickDivide > 0) {
        value = value / secondValue;
    };
    screen.textContent = value;
    displayValue = 0;
});



x.addEventListener('click', () => {
    clickMultiply++
    clickOnce++
    if (clickOnce == 1) {
        value = parseInt(displayValue);
        displayValue = '';
    }
        else if (clickOnce > 1) {
            secondValue = parseInt(displayValue);
            value = value * secondValue;
            screen.textContent = value;
            ;
        }
    displayValue = '';
});

divide.addEventListener('click', () => {
    clickDivide++
    clickOnce++
    if (clickOnce == 1) {
        value = parseInt(displayValue);
        displayValue = '';
    }
        else if (clickOnce > 1) {
            secondValue = parseInt(displayValue);
            value = value / secondValue;
            screen.textContent = value;
            ;
        }
    displayValue = '';
});