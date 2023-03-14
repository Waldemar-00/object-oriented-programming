export default class Form {
    constructor(form) {
        this.forms = document.querySelectorAll(form);
        this.inputs = document.querySelectorAll('input');
        this.message = {
            load: 'Loading...',
            success: 'Success...',
            failure: 'Something breaked...',
        };
        this.path = 'https://jsonplaceholder.typicode.com/posts';
    }
    async postData(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {"Content-Type": "application/json;charset=UTF-8"},
            body: JSON.stringify(data),
        });
        return  await response.text();
    }
    mailValidate() {
        const emails = document.querySelectorAll('[type="email"]');
        emails.forEach(mail => {
            mail.addEventListener('keypress', function(e) {
                if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
                    e.preventDefault();
                }
            });
        });
    }
    initMask() {

        let setCursorPosition = (pos, elem) => {
            elem.focus();
            
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                let range = elem.createTextRange();

                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        };

        function createMask(event) {
            let matrix = '+1 (___) ___-____',
                i = 0,
                def = matrix.replace(/\D/g, ''),
                val = this.value.replace(/\D/g, '');

            if (def.length >= val.length) {
                val = def;
            }

            this.value = matrix.replace(/./g, function(a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            });

            if (event.type === 'blur') {
                if (this.value.length == 2) {
                    this.value = '';
                }
            } else {
                setCursorPosition(this.value.length, this);
            }
        }

        let inputs = document.querySelectorAll('[name="phone"]');

        inputs.forEach(input => {
            input.addEventListener('input', createMask);
            input.addEventListener('focus', createMask);
            input.addEventListener('blur', createMask);
        });
    }

    init() {
        this.initMask();
        this.mailValidate();
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                const statusMessage = document.createElement('div');
                statusMessage.style.cssText = `
                margin-top: 35px;
                font-size: 20px;
                color: black;
                `;
                form.append(statusMessage);
                statusMessage.innerText = this.message.load;

                const formData = new FormData(form);
                const dataObj = {};
                formData.forEach((value, key) => {
                    dataObj[key] = value;
                });
                this.postData(this.path, dataObj).then(response => {
                    console.log(response);
                    statusMessage.innerText = this.message.success;
                }).catch(() => {
                    statusMessage.innerHTML = this.message.failure;
                }).finally(() => {
                    this.inputs.forEach(input => {
                        input.value = '';
                    });
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 4000);
                });
            });
        });
    }
}
