let strDados = JSON.parse(localStorage.getItem("meuDataBase"));

function leDados() {
  let objDados = {};
  if (strDados != null) {
    return strDados;
  } else {
    objDados = {
      pergunta: [
        {
          id: 1,
          pergunta: "Como posso para adotar um pet?",
          resposta: "...",
          categoria: "Adocao"
        }
      ],
    };
  }

  return objDados;
}

function salvaDados(dados) {
  localStorage.setItem("meuDataBase", JSON.stringify(dados));
}

function incluirPergunta() {
  // Ler os dados do localStorage
  let objDados = leDados();

  // Incluir um novo contato
  let intId = document.getElementById("id");
  let strPergunta = document.getElementById("pergunta");
  let strResposta = document.getElementById("resposta");
  let strCategoria = document.getElementById("categoria");

  let novaPergunta = {
    id: intId.value,
    pergunta: strPergunta.value,
    resposta: strResposta.value,
    categoria: strCategoria.value,
  };

  objDados.pergunta.push(novaPergunta);

  // Salvar os dados no localStorage novamente
  salvaDados(objDados);

  // Atualiza os dados da tela
  imprimeDados(strCategoria.value);
}

function imprimeDados(strCategoria) {
  let strHtml = "";
  let objDados = leDados();
  for (i = 0; i < objDados.pergunta.length; i++) {
    if (objDados.pergunta[i].categoria === strCategoria) {
      strHtml += `
            <div class="card mb-1">
            <div class="card-body row">
                <div class="col text-start">
                 <h5 class="card-title list-inline-item">&#10067- ${objDados.pergunta[i].id}</h5>
                 <h6 class="card-subtitle list-inline-item">${objDados.pergunta[i].pergunta}</h6>
                </div>
                <div class="col text-end">
                 <p class="card-text">${objDados.pergunta[i].resposta}</p>
                </div>
            </div>
        </div>`;
    }
  }

  if (strHtml == "") {
    strHtml += `
          <div class="card mb-1">
          <div class="card-body row">
               <h5 class="card-title --bs-danger">Perguntas não encontradas</h5>
          </div>
      </div>`;
  }

  document.getElementById("tela").innerHTML = strHtml;
}

// Configura os botões
document.getElementById('btn1').addEventListener("click", (e) => {
  imprimeDados("Adocao");
});

document.getElementById('btn2').addEventListener("click", (e) => {
  imprimeDados("Denuncia");
});

document.getElementById('btn3').addEventListener("click", (e) => {
  imprimeDados("Cadastro");
});

document.getElementById('btnPerguntar').addEventListener("click", (e) => {
  incluirPergunta();
});