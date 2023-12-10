let strDados = JSON.parse(localStorage.getItem("meuDb"));

function leDados() {
    let objDados = {};
    if (strDados != null) {
        return strDados;
    } else {
        objDados = {
            denuncia: [
                {
                    nome: "Nome",
                    email: "email@email.com",
                    telefone: "31999999999",
                    endereco: "Rua X 777, Bairro, Cidade, Estado",
                    comentario: "comentarios",
                    organizacao: "ONG 1"
                }
            ],
        };
    }

    return objDados;
}

function salvaDados(dados) {
    localStorage.setItem("meuDb", JSON.stringify(dados));
}

function escolheOrg() {
    let x = Math.floor(Math.random() * 5);
    let strOrg = ["ONG 1", "ONG 2", "ONG 3", "Projeto 1", "Projeto 2"];

    if(x > strOrg,length){
        x = 0;
    }

    return strOrg[x];
}

function incluirDenuncia() {
    // Ler os dados do localStorage
    let objDados = leDados();

    // Incluir um novo contato
    let strNome = document.getElementById("name");
    let strEmail = document.getElementById("email");
    let strTelefone = document.getElementById("telefone");
    let strEndereco = document.getElementById("endereco");
    let strComentario = document.getElementById("comment");

    let novaDenuncia = {
        nome: strNome.value,
        email: strEmail.value,
        telefone: strTelefone.value,
        endereco: strEndereco.value,
        comentario: strComentario.value,
        organizacao: escolheOrg(),
    };

    objDados.denuncia.push(novaDenuncia);

    // Salvar os dados no localStorage novamente
    salvaDados(objDados);

    // Atualiza os dados da tela
    imprimeDados();
}

function imprimeDados() {
    let tela = document.getElementById("tela");
    let strHtml = "<h1>Administrador,</h1><p>Veja as denúncias cadastradas:</p>";
    let objDados = leDados();

    for (i = 0; i < objDados.denuncia.length; i++) {
        strHtml += `<p>${objDados.denuncia[i].nome} - ${objDados.denuncia[i].email} - ${objDados.denuncia[i].telefone} - ${objDados.denuncia[i].endereco} - ${objDados.denuncia[i].comentario} - ${objDados.denuncia[i].organizacao}</p>`;
    }

    tela.innerHTML = strHtml;
}

// Configura os botões
document.getElementById("btnCarrega").addEventListener("click", (e) => {
    imprimeDados()

});

document
    .getElementById("btnDenuncie")
    .addEventListener("click", (e) => {
        if (document.getElementById('check').checked == true) {
            incluirDenuncia();
        }
    });