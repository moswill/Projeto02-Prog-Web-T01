if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    var nameValid
    var cpfValid
    var emailValid
    var phoneValid
    var contributeValid

    ready()
}

function ready() {
    registerButton = document.querySelector('.register')

    registerButton.addEventListener('click', validateForm)
}

function validateForm() {

    //validateName()
    validateGithub()

    if (nameValid & cpfValid & emailValid & phoneValid & contributeValid) {
        trueForm()
    }
    else {
        log('form false')
    }
}

function validateName() {
    const formName = document.getElementById('name')

    if (!formName.value == '') {
        return nameValid = true
    }
}

function validateCpf() {
    const formCpf = document.getElementById('cpf')
    const cpfNumbers = formCpf.value.split('').map((item) => parseInt(item))

    let firstVerifierSum = 0
    let secondVerifierSum = 0

    for (let i = 0, multiplier = 10; i < 9; i++, multiplier--) {
        firstVerifierSum += cpfNumbers[i] * multiplier
    }

    if ((firstVerifierSum * 10) % 11 == formCpf.value[9]) {
        for (let i = 0, multiplier = 11; i < 10; i++, multiplier--) {
            secondVerifierSum += formCpf.value[i] * multiplier
        }

        if ((secondVerifierSum * 10) % 11 == formCpf.value[10]) {
            return cpfValid = true
        }
    }
}

function validateEmail() {
    const formEmail = document.getElementById('email')
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formEmail.value)) {
        return emailValid = true
    }
}

function validatePhone() {
    const formPhone = document.getElementById('phone')

    if (/(\(?\d{2}\)?\s?)(\d{5}\-?\d{4})/.test(formPhone.value)) {
        return phoneValid = true
    }
}

function validateContribute() {
    const formGithub = document.getElementById('github')
    const formRadio = document.getElementsByClassName('inputRadio')

    switch (formRadio[2].checked) {
        case true:
            formGithub.required = true
            if (/^github\.com\/[\w]+$/.test(formGithub.value)) {
                return contributeValid = true
            }
        break
        case false:
            if (!formRadio[0].checked & !formRadio[1].checked) {
                return
            }
            else {
                return contributeValid = true
            }
    }
}

function trueForm() {
    window.open('registered.html')
}