function limparRespostas() {
 
  document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
}

function enviarQuiz() {
 
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');

  // Verificar se todas as perguntas foram respondidas
  if (!q1 || !q2 || !q3) {
      alert('Por favor, responda a todas as perguntas.');
      return;
  }

  // Avaliar respostas
  let acertos = 0;

  if (q1.value === 'companhia') {
      acertos++;
  }

  if (q2.value === 'sim') {
      acertos++;
  }

  if (q3.value === 'sim') {
      acertos++;
  }

  let mensagemResultado = '';
  if (acertos === 3) {
      mensagemResultado = 'Parabéns! Você acertou todas as perguntas e parece ser um ótimo candidato para adoção!';
  } else {
      mensagemResultado = 'Obrigado por participar, mas suas respostas indicam que talvez você precise considerar algumas coisas antes de adotar.';
  }

  // Exibir resultado
  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('result-container').style.display = 'block';
  document.getElementById('result-message').innerText = mensagemResultado + '\nNúmero de Acertos: ' + acertos;
}

function voltarQuiz() {
  limparRespostas(); // Limpar respostas ao voltar
  document.getElementById('quiz-container').style.display = 'block';
  document.getElementById('result-container').style.display = 'none';
}


window.onload = limparRespostas;