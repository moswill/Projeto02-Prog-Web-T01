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
    if (nameValid == true) {
        log('name valid true')
    }

    //if (nameValid == true & cpfValid == true & emailValid == true & phoneValid == true & gitHubProfileValid == true) {
    //    trueForm()
    //}
}

function validateCpf() {
    var formCpf = document.getElementById('cpf').value
}

function validateName(formName) {

    if (!formName.value == '') {
        log('name true')

        return nameValid = true
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