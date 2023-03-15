document.addEventListener('DOMContentLoaded', () => {
    const telInputs = document.querySelectorAll('input[data-tel-input]');

    function onPhoneInput() {

    }
    for (let i = 0; i < telInputs.length; i++) {
        telInputs[i].addEventListener('input', onPhoneInput);
    }
});