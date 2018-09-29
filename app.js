const form = document.forms['validation-form'];

form.name.addEventListener('blur', (e) => {
    reg = /^[a-zA-Zа-яА-Я]{2,30}$/;
    validateField(e.target, reg);
});

form.zip.addEventListener('blur', (e) => {
    reg = /^\d{5}(-\d{4})?$/;
    validateField(e.target, reg);
});

form.email.addEventListener('blur', (e) => {
    reg = /^([a-z0-9_\-\.]+)@([a-z0-9\-\._]+)\.([a-z]{2,5})$/;
    validateField(e.target, reg);
});

form.phone.addEventListener('blur', (e) => {
    reg = /^\+\d{1}[-. ]?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
    validateField(e.target, reg);
});

function validateField(field, reg) {
    if (reg.test(field.value)) {
        field.classList.remove('is-invalid');
    } else {
        field.classList.add('is-invalid');
    }
}