// COR BACKGROUND

const fundoCor = document.getElementById('fundo')
const backgroundAzul = document.getElementById('background_azul')
const backgroundAzulClaro = document.getElementById('background_azul_claro')
const backgroundAzulEscuro = document.getElementById('background_azul_escuro')
const backgroundGradiente = document.getElementById('background_gradiente')
const backgroundVermelho = document.getElementById('background_vermelho')
const backgroundVerde = document.getElementById('background_verde')
const backgroundPreto = document.getElementById('background_preto')
const backgroundCinza = document.getElementById('background_cinza')
const backgroundBranco = document.getElementById('background_branco')

backgroundAzul.onclick = function() {
  fundoCor.style.backgroundColor = '#0025FF';
  fundoCor.style.backgroundImage = 'none';
}

backgroundAzulClaro.onclick = function() {
  fundoCor.style.backgroundColor = '#00EBFC';
  fundoCor.style.backgroundImage = 'none';
}

backgroundAzulEscuro.onclick = function() {
  fundoCor.style.backgroundColor = '#02103F';
  fundoCor.style.backgroundImage = 'none';
}

backgroundGradiente.onclick = function() {
  fundoCor.style.backgroundImage = 'linear-gradient(40deg, #00EBFC, #0025FF)';
  fundoCor.style.backgroundImage += '-webkit-linear-gradient(40deg, #00EBFC, #0025FF)';
  fundoCor.style.backgroundImage += '-moz-linear-gradient(40deg, #00EBFC, #0025FF)';
  fundoCor.style.backgroundImage += '-o-linear-gradient(40deg, #00EBFC, #0025FF)';
}

backgroundVermelho.onclick = function() {
  fundoCor.style.backgroundColor = '#f03232';
  fundoCor.style.backgroundImage = 'none';
}

backgroundVerde.onclick = function() {
  fundoCor.style.backgroundColor = '#1aa562';
  fundoCor.style.backgroundImage = 'none';
}

backgroundPreto.onclick = function() {
  fundoCor.style.backgroundColor = '#000000';
  fundoCor.style.backgroundImage = 'none';
}

backgroundCinza.onclick = function() {
  fundoCor.style.backgroundColor = '#7b7e8a';
  fundoCor.style.backgroundImage = 'none';
}

backgroundBranco.onclick = function() {
  fundoCor.style.backgroundColor = '#FFFFFF';
  fundoCor.style.backgroundImage = 'none';
}
