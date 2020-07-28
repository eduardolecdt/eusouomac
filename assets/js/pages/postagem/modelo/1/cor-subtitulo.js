// COR SUBTITULO

const subtitulo = document.getElementById('subtitulo')
const subtituloAzul = document.getElementById('subtitulo_azul')
const subtituloAzulClaro = document.getElementById('subtitulo_azul_claro')
const subtituloAzulEscuro = document.getElementById('subtitulo_azul_escuro')
const subtituloVermelho = document.getElementById('subtitulo_vermelho')
const subtituloVerde = document.getElementById('subtitulo_verde')
const subtituloPreto = document.getElementById('subtitulo_preto')
const subtituloCinza = document.getElementById('subtitulo_cinza')
const subtituloBranco = document.getElementById('subtitulo_branco')

subtituloAzul.onclick = function() {
  subtitulo.style.color = '#0025FF';
}

subtituloAzulClaro.onclick = function() {
  subtitulo.style.color = '#00EBFC';
}

subtituloAzulEscuro.onclick = function() {
  subtitulo.style.color = '#02103F';
}

subtituloVermelho.onclick = function() {
  subtitulo.style.color = '#f03232';
}

subtituloVerde.onclick = function() {
  subtitulo.style.color = '#1aa562';
}

subtituloPreto.onclick = function() {
  subtitulo.style.color = '#000000';
}

subtituloCinza.onclick = function() {
  subtitulo.style.color = '#7b7e8a';
}

subtituloBranco.onclick = function() {
  subtitulo.style.color = '#FFFFFF';
}
