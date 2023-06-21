document.addEventListener('DOMContentLoaded', function() {
    const localStorageKeys = [
      'nome',
      'posicao',
      'imagem',
      'descricao',
      'nome_completo',
      'nascimento',
      'altura'
    ];

    const localStorageData = {};

    localStorageKeys.forEach(function(key) {
      localStorageData[key] = localStorage.getItem(key);
    });

    const nome_p = document.createElement('p');
    nome_p.textContent = localStorageData.nome;

    const posicao_p = document.createElement('p');
    posicao_p.textContent = localStorageData.posicao;

    const imagem_p = document.createElement('img');
    imagem_p.src = localStorageData.imagem;

    const descricao_p = document.createElement('p');
    descricao_p.textContent = localStorageData.descricao;

    const nome_completo_p = document.createElement('p');
    nome_completo_p.textContent = "Nome completo: " + localStorageData.nome_completo;
    nome_p.style.fontWeight = "bolder";

    const nascimento_p = document.createElement('p');
    nascimento_p.textContent = "Nascimento: " + localStorageData.nascimento;

    const altura_p = document.createElement('p');
    altura_p.textContent = "Altura: " + localStorageData.altura;

    const info_jogador = document.getElementById('foto_info');
    info_jogador.style.textAlign = "center";


    info_jogador.appendChild(imagem_p);
    info_jogador.appendChild(nome_p);
    info_jogador.appendChild(posicao_p);

    const detalhes_info = document.getElementById('detalhes_info');
    detalhes_info.appendChild(descricao_p);
    detalhes_info.appendChild(nome_completo_p);
    detalhes_info.appendChild(nascimento_p);
    detalhes_info.appendChild(altura_p);

    const tudo = document.getElementById('info_jogador');
    tudo.appendChild(info_jogador);
    tudo.appendChild(detalhes_info);

    const voltar = document.createElement('a');
    voltar.className = "btn_voltar";
    voltar.innerHTML = "Voltar";
    voltar.href = "./index.html";
    voltar.style.textDecoration = "none";
    voltar.style.border = "2px solid"
    voltar.style.backgroundColor = "white"
    voltar.style.color = "black";
    voltar.style.fontSize = "30px";

    document.body.appendChild(tudo);
    document.body.appendChild(voltar);
  });
