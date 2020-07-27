// COR arroba

const arroba = document.getElementById('arroba')
const textoAzul = document.getElementById('arroba_azul')
const textoAzulClaro = document.getElementById('arroba_azul_claro')
const textoAzulEscuro = document.getElementById('arroba_azul_escuro')
const textoVermelho = document.getElementById('arroba_vermelho')
const textoVerde = document.getElementById('arroba_verde')
const textoPreto = document.getElementById('arroba_preto')
const textoCinza = document.getElementById('arroba_cinza')
const textoBranco = document.getElementById('arroba_branco')

textoAzul.onclick = function() {
  arroba.style.color = '#0025FF';
}

textoAzulClaro.onclick = function() {
  arroba.style.color = '#00EBFC';
}

textoAzulEscuro.onclick = function() {
  arroba.style.color = '#02103F';
}

textoVermelho.onclick = function() {
  arroba.style.color = '#f03232';
}

textoVerde.onclick = function() {
  arroba.style.color = '#1aa562';
}

textoPreto.onclick = function() {
  arroba.style.color = '#000000';
}

textoCinza.onclick = function() {
  arroba.style.color = '#7b7e8a';
}

textoBranco.onclick = function() {
  arroba.style.color = '#FFFFFF';
}
