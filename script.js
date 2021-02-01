const form = document.getElementById('signup-form');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const registerButton = document.getElementById('register-button');
const messageContainer = document.getElementById('message-container');
const message = document.getElementById('message');


let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using constrait API
    isValid = form.checkValidity();
    console.log(isValid);
    // style main message for an error
    if (!isValid) {
        message.textContent = 'Please fill out all fields.'
        messageContainer.style.color = 'red';
        messageContainer.style.border = '1px solid red';
        return;
    }
    validatePassword();
}

function processFormDate(e) {
    e.preventDefault();
    // validate form
    validateForm()
    // Submit data if Valid
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}

function validatePassword() {
    if (password1.value === password2.value) {
        // make green
        password1.style.border = '1px solid green';
        password2.style.border = '1px solid green';
        passwordsMatch = true; 
    } else {
        // make red
        password1.style.border = '1px solid red';
        password2.style.border = '1px solid red';
        passwordsMatch = false;
        message.textContent = 'Passwords do not match.'
        messageContainer.style.color = 'red';
        messageContainer.style.border = '1px solid red';
        return;
    }
    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'Successfully Registered.'
        messageContainer.style.color = 'green';
        messageContainer.style.border = '1px solid green';
    }
}

function storeFormData() {
    const user = {
        firstname: form.fname.value,
        lastname: form.lname.value,
        phone: form.number.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    // Do something with user data i.e post to DB
    console.log(user);
}

password2.addEventListener('change', validatePassword);
form.addEventListener('submit', processFormDate);