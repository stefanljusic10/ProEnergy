const setErrors = (input, message) => {
    input.previousElementSibling.innerHTML = message
    input.previousElementSibling.classList.add('errorLabel')
    input.classList.add('errorInput')
}

const clearErrors = (input, labelText) => {
    input.previousElementSibling.innerHTML = labelText
    input.previousElementSibling.classList.remove('errorLabel')
    input.classList.remove('errorInput')
}

const validateInput = (input) => {
    const regex = /^[a-zA-Z ]{2,30}$/.test(input);
    return regex
}

const validateEmail = email => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    return regex;
}

export { setErrors, clearErrors, validateInput, validateEmail }