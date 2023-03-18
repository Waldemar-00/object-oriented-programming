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
        if (e.target.selectionStart !== e.target.value.length) {
            if (e.data && /\D/g.test(e.data)) {
                e.target.value = inputValueNumbers;
            }
            return;
        }
        if (['1'].indexOf(inputValueNumbers[0]) > (- 1)) {
            if (inputValueNumbers[0] === '9') {
                inputValueNumbers = '1' + inputValueNumbers;
            }
            formattedInputValue = '+1' + ' ';
            if (formattedInputValue.length > 1) {
                formattedInputValue += '(' + inputValueNumbers.slice(1, 4); 
            }
            if (inputValueNumbers.length >= 5) {
                formattedInputValue += ') ' + inputValueNumbers.slice(4, 7);
            }
            if (inputValueNumbers.length >= 8) {
                formattedInputValue += '-' + inputValueNumbers.slice(7, 11);
            }
        } else {
            formattedInputValue = '+' + inputValueNumbers.substring(0, 15);
        }
        e.target.value = formattedInputValue;
        console.log(formattedInputValue);
    }
    function onPhoneKeyDown(e) {
        console.log(e.keyCode, '--', e.target.value);
        console.log(e.target.value.length);
        if (e.keyCode === 8 && getInputValueNumbers(e.target).length === 1) {
            e.target.value = '';
        }
    }
    function onPhonePaste(e) {
        const paste = e.clipboardData || window.clipboardData;
        if (paste) {
            const pastedText = paste.getData('text');
            if (/\D/g.test(pastedText)) {
                e.target.value = getInputValueNumbers(e.target);
            }
        }
    }
    for (let i = 0; i < telInputs.length; i++) {
        telInputs[i].addEventListener('input', onPhoneInput);
        telInputs[i].addEventListener('keydown', onPhoneKeyDown);
        telInputs[i].addEventListener('paste', onPhonePaste);
    }
}