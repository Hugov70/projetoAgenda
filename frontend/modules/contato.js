const validator = require('validator');

export default class Contato {
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
        const nomeInput = el.querySelector('input[name="nome"]'); 
        const sobrenomeInput = el.querySelector('input[name="sobrenome"]'); 
        const emailInput = el.querySelector('input[name="email"]'); 
        const telefoneInput = el.querySelector('input[name="telefone"]'); 
        if(nomeInput.value === '') return alert('Nome é um campo obrigatório');
        if(emailInput.value === '' && telefoneInput.value === '' ) return alert('Coloque o email ou o telefone');  
        if(!validator.isEmail(emailInput.value)) return alert('Email inválido')

        el.submit(); 
    }
}