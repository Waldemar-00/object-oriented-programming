export default class Form {
    constructor(form) {
        this.forms = document.querySelectorAll(form);
        this.inputs = document.querySelectorAll('input');
        this.message = {
            load: 'Loading...',
            success: 'Success...',
            failure: 'Something breaked...',
        };
        // this.path = 'assets/question.php';
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
        const emails = document.querySelector('[type="email"]');
        emails.forEach(mail => {
            mail.addEventListener('keypress', (e) => {
                if (e.key.match(/[^a-z 0-9 @ \.]/)) {
                    e.preventDefault();
                }
            });
        });
    }
    // phoneValidate() {
        // const phones = document.querySelector('[type="phone"]');
        // phones.forEach(phone => {
            // phone.addEventListener('keypress', (e) => {
                // if (e.key.match(/[^ 0-9]))
            // });
        // });
    // }
    init() {
        // this.mailValidate();
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
