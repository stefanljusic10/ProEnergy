import { setErrors, clearErrors, validateInput, validateEmail } from './utils'

const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const message = document.getElementById('message')

const checkInputs = () => {
    const firstNameValue = firstName.value.trim()
    const lastNameValue = lastName.value.trim()
    const emailValue = email.value.trim()
    const subjectValue = subject.value.trim()
    const messageValue = message.value.trim()

    if(!validateInput(firstNameValue))
        setErrors(firstName, 'First name is too short*')
    else clearErrors(firstName, 'Your first name*')

    if(!validateInput(lastNameValue))
        setErrors(lastName, 'Last name is too short*')
    else clearErrors(lastName, 'Your last name*')

    if(!validateEmail(emailValue))
        setErrors(email, 'Please type correct email address*')
    else clearErrors(email, 'Your email address*')

    if(subjectValue.length < 3)
        setErrors(subject, 'Subject is too short*')
    else clearErrors(subject, 'Your message*')
}

export default checkInputs