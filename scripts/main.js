const form = document.querySelector('.section-launch form');
form.setAttribute('novalidate', '');

const email = document.querySelector('.section-launch form .wrapper-email input');
const emailError = document.querySelector('.section-launch form .wrapper-email span');

email.addEventListener('input', () => {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.parentElement.classList.remove('error');
    }
});

form.addEventListener('submit', event => {
    if (!email.validity.valid) {
        event.preventDefault();
        showError();
    }
});

function showError() {

    // Email validation

    email.value = email.value.trim();
    if (!email.validity.valid) {
        if (email.validity.valueMissing) {
            emailError.textContent = 'Email cannot be empty';
        } else if (email.validity.typeMismatch) {
            emailError.textContent = 'Please provide a valid email address';
        }

        email.parentElement.classList.add('error');
    }
}