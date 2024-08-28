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
        default:
            alert('Invalid output system selected.');
            return;
    }

    // Display the result
    document.getElementById('result').innerText = `Result: ${result}`;
}
