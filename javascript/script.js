// This is the complete script.js file with the clear button function included
function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
    
    if (isNaN(num1) && operation !== 'square' && operation !== 'cube') {
        document.getElementById('result').innerText = 'Result: Please enter a valid number';
        return;
    }

    switch(operation) {
        case 'add':
            if (isNaN(num2)) {
                result = 'Please enter second number';
            } else {
                result = num1 + num2;
            }
            break;
        case 'subtract':
            if (isNaN(num2)) {
                result = 'Please enter second number';
            } else {
                result = num1 - num2;
            }
            break;
        case 'multiply':
            if (isNaN(num2)) {
                result = 'Please enter second number';
            } else {
                result = num1 * num2;
            }
            break;
        case 'divide':
            if (isNaN(num2)) {
                result = 'Please enter second number';
            } else if (num2 === 0) {
                result = 'Cannot divide by zero';
            } else {
                result = num1 / num2;
            }
            break;
        case 'square':
            result = num1 * num1;
            break;
        case 'cube':
            result = num1 * num1 * num1;
            break;
    }

    if (typeof result === 'number') {
        document.getElementById('result').innerText = `Result: ${result.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = `Result: ${result}`;
    }
}

// The clear button functionality is here
function clearAll() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerText = 'Result: ';
}