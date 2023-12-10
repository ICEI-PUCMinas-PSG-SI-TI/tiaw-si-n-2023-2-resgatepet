document.getElementById('faleConoscoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    var dadosFaleConosco = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };


    var dadosStorage = JSON.parse(localStorage.getItem('Fale Conosco'))

    if (dadosStorage) {
        let dados = JSON.stringify([...dadosStorage, dadosFaleConosco])
        localStorage.setItem('Fale Conosco', dados);

    }
    else {
        localStorage.setItem('Fale Conosco', JSON.stringify([dadosFaleConosco]));
    }


    document.getElementById('faleConoscoForm').reset();

    alert('Mensagem enviada com sucesso!');
});