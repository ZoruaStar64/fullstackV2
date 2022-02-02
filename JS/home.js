const registerButton = document.getElementById('registerButton');
const registerForm = document.getElementById('registerForm');
const loginButton = document.getElementById('loginButton');
const loginForm = document.getElementById('loginForm');

function showRegisterForm() {
    if (registerForm.style.display === 'none') {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    }
    else {
        registerForm.style.display = 'none';
    }
}
registerButton.addEventListener('click', showRegisterForm);

function showLoginForm() {
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    }
    else {
        loginForm.style.display = 'none';
    }
}
loginButton.addEventListener('click', showLoginForm);
