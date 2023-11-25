let currentOutput = '';
let calculated = false;

const calculatorScreen = document.querySelector('.curr');
const previousScreen = document.querySelector('.prev');

function appendExpression(input) {
    if (calculated) {
        currentOutput = '';
        calculated = false;
    }
    currentOutput += input;
    updateScreen();
}

function calculateExpression() {
    try {
        let result = eval(currentOutput);
        if (!isFinite(result)) {
            result = 'Error';
        }
        currentOutput = result.toString();
        calculated = true;
        updateScreen();
    } catch (error) {
        currentOutput = 'Error';
        updateScreen();
    }
}

function clearOutput() {
    currentOutput = '';
    calculated = false;
    updateScreen();
}

function deleteLast() {
    currentOutput = currentOutput.slice(0, -1);
    updateScreen();
}

function updateScreen() {
    calculatorScreen.innerText = currentOutput;
    previousScreen.innerText = '';
}
