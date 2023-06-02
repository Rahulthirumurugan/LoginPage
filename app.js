const form = document.querySelector('form');
const email = document.querySelector('#email');
const password=document.querySelector('#password');


email.addEventListener('input',()=>{
    const emailVal = email.value.trim();
    if(emailVal===''){
        setError(email,'Email is required')
    }else if(! validateEmail(emailVal)){
        setError(email,'Please enter a valid email')
    }else{
        setSuccess(email);
    }

});
password.addEventListener('input',()=>{
    const passwordVal = password.value.trim();
    if(passwordVal.length<8){
        setError(password,'Password must be atleast 8 characters long')
    }else{
        setSuccess(password)
    }
});

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    const inputs = inputGroup.querySelector('input');

    errorElement.innerText=message;
    inputs.style = "border-color:red";
}
function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    const inputs = inputGroup.querySelector('input');

    errorElement.innerText='';
    inputs.style = "border-color:green";
}
const validateEmail = (email)=>{
    return String(email)
        .toLowerCase()
        .match(
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        );
};