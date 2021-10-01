const alertBox = document.querySelector('.alert-box')    
function getPassword() {
const chars = '01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#%^&*()_+~|}{[]:;?><,./-="';
const passwordLength = 16;

let password = '';
for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
}
document.querySelector('#password').value = password;
// alertBox.innerHTML = 'New Password Copied:<br><br>' + password;
}
function copyPassword() {
const copyPassText = document.querySelector('#password');
copyPassText.select();
copyPassText.setSelectionRange(0, 9999);
document.execCommand('copy');
alertBox.classList.toggle('active')
setTimeout(() => alertBox.classList.toggle('active'), 2700);
}
document.querySelector('#btn').addEventListener('click', getPassword);
document.querySelector('.copy').addEventListener('click', copyPassword);