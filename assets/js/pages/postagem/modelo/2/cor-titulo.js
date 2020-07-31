// COR TITULO

const titulo = document.getElementById('titulo')
const tituloAzul = document.getElementById('titulo_azul')
const tituloAzulClaro = document.getElementById('titulo_azul_claro')
const tituloAzulEscuro = document.getElementById('titulo_azul_escuro')
const tituloVermelho = document.getElementById('titulo_vermelho')
const tituloVerde = document.getElementById('titulo_verde')
const tituloPreto = document.getElementById('titulo_preto')
const tituloCinza = document.getElementById('titulo_cinza')
const tituloBranco = document.getElementById('titulo_branco')

tituloAzul.onclick = function() {
  titulo.style.color = '#0025FF';
}

tituloAzulClaro.onclick = function() {
  titulo.style.color = '#00EBFC';
}

tituloAzulEscuro.onclick = function() {
  titulo.style.color = '#02103F';
}

tituloVermelho.onclick = function() {
  titulo.style.color = '#f03232';
}

tituloVerde.onclick = function() {
  titulo.style.color = '#1aa562';
}

tituloPreto.onclick = function() {
  titulo.style.color = '#000000';
}

tituloCinza.onclick = function() {
  titulo.style.color = '#7b7e8a';
}

tituloBranco.onclick = function() {
  titulo.style.color = '#FFFFFF';
}
