document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var telefone = document.getElementById('telefone').value;
    var endereco = document.getElementById('endereco').value;
    var email = document.getElementById('email').value;

    var dadosCadastro = {
        nome: nome,
        sobrenome: sobrenome,
        telefone: telefone,
        endereco: endereco,
        email: email
    };


    var dadosStorage = JSON.parse(localStorage.getItem('cadastro'))

    if (dadosStorage) {
        let dados = JSON.stringify([...dadosStorage, dadosCadastro])
        localStorage.setItem('cadastro', dados);

    }
    else {
        localStorage.setItem('cadastro', JSON.stringify([dadosCadastro]));
    }


    document.getElementById('cadastroForm').reset();

    alert('Cadastro salvo com sucesso!');
});