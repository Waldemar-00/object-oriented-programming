export default function phone(inputTel) {
    const telInputs = document.querySelectorAll(inputTel);
    function getInputValueNumbers(input) {
        return input.value.replace(/\D/g, '');
    }
    function onPhoneInput(e) {
        let inputValueNumbers = getInputValueNumbers(e.target);
        let formattedInputValue = '';
        if (!inputValueNumbers) {
            return (e.target.value = '');
        }
        if (['7', '8', '9'].indexOf(inputValueNumbers[0]) > (- 1)) {
            if (inputValueNumbers[0] === '9') {
                inputValueNumbers = '7' + inputValueNumbers;
            }
            const firstChar = inputValueNumbers[0] === '8' ? '8' : '+7';
            formattedInputValue = firstChar + ' ';
            if (formattedInputValue.length > 1) {
                formattedInputValue += '(' + inputValueNumbers.slice(1, 4); 
            }
            if (inputValueNumbers.length >= 5) {
                formattedInputValue += ') ' + inputValueNumbers.slice(4, 7);
            }
            if (inputValueNumbers.length >= 8) {
                formattedInputValue += '-' + inputValueNumbers.slice(7, 9);
            }
            if (inputValueNumbers.length >= 10) {
                formattedInputValue += '-' + inputValueNumbers.slice(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputValueNumbers.substring(0, 16);
        }
        e.target.value = formattedInputValue;
        console.log(formattedInputValue);
    }
    for (let i = 0; i < telInputs.length; i++) {
        telInputs[i].addEventListener('input', onPhoneInput);
    }
}