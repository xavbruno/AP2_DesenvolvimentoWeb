const div_elenco_feminino = document.getElementById("ifeminino");
const div_elenco_masculino = document.getElementById("imasculino");

jogadores.forEach((ele) => {
  const img_jogador = document.createElement('img');
  img_jogador.src = ele.imagem;
  img_jogador.style.width = "95%";

  const nome_jogador = document.createElement('p');
  nome_jogador.innerHTML = ele.nome;
  nome_jogador.style.fontWeight = "bolder";

  const div_jogador = document.createElement('div');
  div_jogador.className = "jogador";
  div_jogador.appendChild(img_jogador);
  div_jogador.appendChild(nome_jogador);

  div_jogador.dataset.nome = ele.nome;
  div_jogador.dataset.posicao = ele.posicao;
  div_jogador.dataset.imagem = ele.imagem;
  div_jogador.dataset.descricao = ele.descricao;
  div_jogador.dataset.nome_completo = ele.nome_completo;
  div_jogador.dataset.nascimento = ele.nascimento;
  div_jogador.dataset.altura = ele.altura;

  if (ele.elenco === "feminino") {
    div_elenco_feminino.appendChild(div_jogador);
  } else {
    div_elenco_masculino.appendChild(div_jogador);
  }

  div_jogador.addEventListener("click", function(evento) {
    const div_jogador = evento.currentTarget;

    /* Adiciona ao Local Storage todas as informações do jogador */
    localStorage.setItem('nome', div_jogador.dataset.nome);
    localStorage.setItem('posicao', div_jogador.dataset.posicao);
    localStorage.setItem('imagem', div_jogador.dataset.imagem);
    localStorage.setItem('descricao', div_jogador.dataset.descricao);
    localStorage.setItem('nome_completo', div_jogador.dataset.nome_completo);
    localStorage.setItem('nascimento', div_jogador.dataset.nascimento);
    localStorage.setItem('altura', div_jogador.dataset.altura);

    window.location.href = "./detalhes.html";
  });
});
