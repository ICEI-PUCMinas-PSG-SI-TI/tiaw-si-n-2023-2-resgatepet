const formulario = document.getElementById("form");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("CADASTRO ENVIADO COM SUCESSO");

  const antigo_obj = JSON.parse(localStorage.getItem("cad_ongs")) || [];
  const obj = {
    nome: document.getElementById('nome').value,
    sobrenome: document.getElementById('sobrenome').value,
    telefone: document.getElementById('telefone').value,
    email: document.getElementById('email').value,
    cidade: document.getElementById('cidade').value,
    categoria: document.getElementById('categoria').value,
    saite: document.getElementById('saite').value,
  };

  antigo_obj.push(obj);
  localStorage.setItem("cad_ongs", JSON.stringify(antigo_obj));

  limparFormulario();
  atualizarExibicao();
});

function limparFormulario() {
  document.getElementById('nome').value = "";
  document.getElementById('sobrenome').value = "";
  document.getElementById('telefone').value = "";
  document.getElementById('email').value = "";
  document.getElementById('cidade').value = "";
  document.getElementById('categoria').value = "";
  document.getElementById('saite').value = "";
}

function atualizarExibicao() {
  const ongs_localstorage = JSON.parse(localStorage.getItem("cad_ongs")) || [];
  const ongsContainer = document.getElementById("ongs");
  ongsContainer.innerHTML = "";

  ongs_localstorage.forEach((elemento, index) => {
    const elementoDiv = document.createElement("div");
    elementoDiv.innerHTML = `
      <p>Nome: ${elemento.nome}</p>
      <p>Sobrenome: ${elemento.sobrenome}</p>
      <p>Telefone: ${elemento.telefone}</p>
      <p>Email: ${elemento.email}</p>
      <p>Categoria: ${elemento.categoria}</p>
      <p>Website: ${elemento.saite}</p>
      <button onclick="editarItem(${index})">Editar</button>
      <button onclick="excluirItem(${index})">Excluir</button>
      <hr>
    `;
    ongsContainer.appendChild(elementoDiv);
  });
}

function editarItem(index) {
  const ongs_localstorage = JSON.parse(localStorage.getItem("cad_ongs")) || [];
  const obj = ongs_localstorage[index];

  document.getElementById('nome').value = obj.nome;
  document.getElementById('sobrenome').value = obj.sobrenome;
  document.getElementById('telefone').value = obj.telefone;
  document.getElementById('email').value = obj.email;
  document.getElementById('cidade').value = obj.cidade;
  document.getElementById('categoria').value = obj.categoria;
  document.getElementById('saite').value = obj.saite;

  ongs_localstorage.splice(index, 1);
  localStorage.setItem("cad_ongs", JSON.stringify(ongs_localstorage));

  atualizarExibicao();
}

function excluirItem(index) {
  const ongs_localstorage = JSON.parse(localStorage.getItem("cad_ongs")) || [];
  ongs_localstorage.splice(index, 1);
  localStorage.setItem("cad_ongs", JSON.stringify(ongs_localstorage));

  atualizarExibicao();
}

atualizarExibicao();