function convert() {
    const inputSystem = document.getElementById('input-system').value;
    const outputSystem = document.getElementById('output-system').value;
    const number = document.getElementById('number-input').value.trim();
    
    if (number === '') {
        alert('Please enter a number.');
        return;
    }
    
    let decimalNumber;

    // Convert the input number to decimal
    switch (inputSystem) {
        case 'decimal':
            decimalNumber = parseInt(number, 10);
            break;
        case 'binary':
            decimalNumber = parseInt(number, 2);
            break;
        case 'quaternary':
            decimalNumber = parseInt(number, 4);
            break;
        case 'sexagesimal':
            decimalNumber = sexagesimalToDecimal(number);
            break;
        default:
            alert('Invalid input system selected.');
            return;
    }

    if (isNaN(decimalNumber)) {
        alert('Invalid number entered for the selected input system.');
        return;
    }

    let result;
    
    // Convert the decimal number to the selected output system
    switch (outputSystem) {
        case 'decimal':
            result = decimalNumber.toString(10);
            break;
        case 'binary':
            result = decimalNumber.toString(2);
            break;
        case 'quaternary':
            result = decimalNumber.toString(4);
            break;
        case 'sexagesimal':
            result = decimalToSexagesimal(decimalNumber);
            break;
        default:
            alert('Invalid output system selected.');
            return;
    }

    // Display the result
    document.getElementById('result').innerText = `Result: ${result}`;
}

// Function to convert Sexagesimal (Base 60) to Decimal (Base 10)
function sexagesimalToDecimal(number) {
    const digits = number.split(':').reverse();
    let decimal = 0;
    for (let i = 0; i < digits.length; i++) {
        decimal += parseInt(digits[i], 10) * Math.pow(60, i);
    }
    return decimal;
}

// Function to convert Decimal (Base 10) to Sexagesimal (Base 60)
function decimalToSexagesimal(decimal) {
    let sexagesimal = [];
    while (decimal > 0) {
        sexagesimal.push(decimal % 60);
        decimal = Math.floor(decimal / 60);
    }
    return sexagesimal.reverse().join(':');
}
