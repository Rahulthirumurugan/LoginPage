const form = document.querySelector('form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmpassword = document.querySelector('#confirmpassword');

username.addEventListener('input', () => {
    const usernameVal = username.value.trim();

    if (usernameVal === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
});
email.addEventListener('input', () => {
    const emailVal = email.value.trim();

    if (emailVal === '') {
        setError(email, 'Email is required');
    } else if (! validateEmail(emailVal)) {
        setError(email, 'Please enter a valid email');
    } else {
        setSuccess(email);
    }
});
password.addEventListener('input', () => {
    const passwordVal = password.value.trim();

    if (passwordVal === '') {
        setError(password, 'Password is required');
    } else {
        setSuccess(password);
    }if(passwordVal.length<8){
        setError(password,'Password must be atleast 8 characters long');
    }else{
        setSuccess(password)
    }
});
confirmpassword.addEventListener('input', () => {
    const confirmpasswordVal = confirmpassword.value.trim();
    const passwordVal = password.value.trim();

if(confirmpasswordVal.length<8){
    setError(confirmpassword,'Password must be atleast 8 characters long');
}else{
    setSuccess(confirmpassword)
}if(confirmpasswordVal == passwordVal){
    setSuccess(confirmpassword)
}else{
    setError(confirmpassword,'Password does not match')
}
    
});


function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    const inputs = inputGroup.querySelector('input');


    errorElement.innerText = message;
    inputs.style.borderColor = 'red';
}
function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    const inputs = inputGroup.querySelector('input');

    errorElement.innerText = '';
    inputs.style.borderColor = 'green';
}
const validateEmail = (email)=>{
    return String(email)
        .toLowerCase()
        .match(
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        );
};