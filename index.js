const form = document.getElementById('form-number')
//const primeiroNumero = document.getElementById('primeiro-numero')
//let formEvalido = false;


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const primeiroNumero = document.getElementById('primeiro-numero').value;
    const segundoNumero = document.getElementById('segundo-numero').value;
    const menssagemValida = `Parabens!!! O primeiro numero é menor que o segundo numero`;
    const menssagemErro = `ERRO! O primeiro numero não esta menor que o segundo numero`;

    function comparaNumero(primeiroNumero, segundoNumero) {
        if(primeiroNumero < segundoNumero) {
            const containerMessageSucesso =  document.querySelector('.success-message');
            containerMessageSucesso.innerHTML = menssagemValida;
            containerMessageSucesso.style.display = 'block';

            document.getElementById('primeiro-numero').value = '';
            document.getElementById('segundo-numero').value = '';

        } else {
            const containerMessageSucesso =  document.querySelector('.error-message');
            containerMessageSucesso.innerHTML = menssagemErro;
            containerMessageSucesso.style.display = 'block';

        }
    }

    comparaNumero(primeiroNumero, segundoNumero)
})