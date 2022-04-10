if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    var nameValid = false
    var cpfValid = false
    var emailValid = false
    var phoneValid = false
    var gitHubProfileValid = false

    ready()
}

function ready() {
    registerButton = document.querySelector('.register')

    registerButton.addEventListener('click', validateForm)
}

function validateForm() {
    if (nameValid & cpfValid) {
        trueForm()
    }
    else {
        log('form false')
    }
}

function validateCpf() {
    var formCpf = document.getElementById('cpf').value
    const cpfNumbers = formCpf.split('').map((item) => parseInt(item))

    let firstVerifierSum = 0
    let secondVerifierSum = 0

    for (let i = 0, multiplier = 10; i < 9; i++, multiplier--) {
        firstVerifierSum += cpfNumbers[i] * multiplier
    }

    if ((firstVerifierSum * 10) % 11 == formCpf[9]) {
        for (let i = 0, multiplier = 11; i < 10; i++, multiplier--) {
            secondVerifierSum += formCpf[i] * multiplier
        }

        if ((secondVerifierSum * 10) % 11 == formCpf[10]) {
            return cpfValid = true
        }
    }
    else {
        alert('CPF inválido')
    }
}

function validateName(formName) {

    if (!formName.value == '') {
        return nameValid = true
    }
    else {
        alert('Nome não pode ficar em branco')
    }
}

function trueForm() {
    log('true form')
}

function log(a) {
    console.log(a)
}

/*
cpf = input('Digite o seu CPF, por favor (sem pontos e traços): ')
cpf_lista = list(cpf)
digito = 0
multiplicador = 10
soma_primeiro_verificador = 0
soma_segundo_verificador = 0
while digito < 9:
    soma_primeiro_verificador += int(cpf_lista[digito]) * multiplicador
    digito += 1
    multiplicador -= 1
digito = 0
multiplicador = 11
if (soma_primeiro_verificador * 10) % 11 == int(cpf_lista[9]):
    while digito < 10:
        soma_segundo_verificador += int(cpf_lista[digito]) * multiplicador
        digito += 1
        multiplicador -= 1
    if (soma_segundo_verificador * 10) % 11 == int(cpf_lista[10]):
        print('CPF válido.\nObrigado')
else:
    print('CPF inválido.')
*/