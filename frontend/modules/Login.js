const validator = require('validator');

export default class Login {
    constructor (formClass) {
        this.form = document.querySelector(formClass)
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault(); 
            this.validate(e);
        })
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]'); 
        const passwordInput = el.querySelector('input[name="password"]'); 

        if(emailInput.value === '' || passwordInput.value === '') return alert('Os campos não podem estar vazios');  
        if(!validator.isEmail(emailInput.value)) return alert('Email inválido')
        if (passwordInput.value.length < 3 || passwordInput.value.length > 50 ) return alert('A senha deve ter entre 3 e 50 caracteres'); 
        el.submit(); 
    }
}