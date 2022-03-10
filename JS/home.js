const registerButton = document.getElementById('registerButton');
const modalBoxR = document.getElementById('modalBoxR');
const loginButton = document.getElementById('loginButton');
const modalBoxL = document.getElementById('modalBoxL');
const futureUpdateButton = document.getElementById('futureUpdateButton');
const futureUpdateContainer = document.getElementById('futureUpdatesContainer');
const closeBox1 = document.getElementById('closeBox1');
const closeBox2 = document.getElementById('closeBox2');
const closeBox3 = document.getElementById('closeBox3');


function showRegisterForm() {
    if (modalBoxR.style.display === 'none') {
        modalBoxR.style.display = 'block';
        modalBoxL.style.display = 'none';
    }
    else {
        modalBoxR.style.display = 'none';
    }
}
registerButton.addEventListener('click', showRegisterForm);

function showLoginForm() {
    if (modalBoxL.style.display === 'none') {
        modalBoxL.style.display = 'block';
        modalBoxR.style.display = 'none';
    }
    else {
        modalBoxL.style.display = 'none';
    }
}
loginButton.addEventListener('click', showLoginForm);

function showFutureUpdates() {
    if (futureUpdateContainer.style.display === 'none') {
        futureUpdateContainer.style.display = 'block';
    }
    else {
        futureUpdateContainer.style.display = 'none';
    }
}
futureUpdateButton.addEventListener('click', showFutureUpdates);

function closeForm() {
    if (modalBoxR.style.display === 'block') {
        modalBoxR.style.display = 'none';
    }
    else if (modalBoxL.style.display === 'block') {
        modalBoxL.style.display = 'none';
    }
    else if (futureUpdateContainer.style.display === 'block') {
        futureUpdateContainer.style.display = 'none';
    }
}
closeBox1.addEventListener('click', closeForm);
closeBox2.addEventListener('click', closeForm);
closeBox3.addEventListener('click', closeForm)