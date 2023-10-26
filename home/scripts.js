
const button = document.getElementById(`btn-submit`)

function validarEmail(email) {
    // Expressão regular para validar um endereço de e-mail
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}


button.addEventListener(`click`, function(ev){
    const email = document.getElementById(`email`).value
    ev.preventDefault()
    
    validarEmail(email)
    if (validarEmail(email)) {
        console.log("O e-mail é válido.");
    } else {
        console.log("O e-mail não é válido.");
    }
})


