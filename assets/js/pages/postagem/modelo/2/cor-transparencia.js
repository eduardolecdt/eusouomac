// COR BACKGROUND

const transparente = document.getElementById('fundoTransparente')
const transparenciaAzul = document.getElementById('transparencia_azul')
const transparenciaAzulClaro = document.getElementById('transparencia_azul_claro')
const transparenciaAzulEscuro = document.getElementById('transparencia_azul_escuro')
const transparenciaVerde = document.getElementById('transparencia_verde')
const transparenciaVermelho = document.getElementById('transparencia_vermelho')
const transparenciaPreto = document.getElementById('transparencia_preto')
const transparenciaCinza = document.getElementById('transparencia_cinza')
const transparenciaBranco = document.getElementById('transparencia_branco')

transparenciaAzul.onclick = function() {
  transparente.style.backgroundColor = '#0025FF90';
}

transparenciaAzulClaro.onclick = function() {
  transparente.style.backgroundColor = '#00EBFC90';
}

transparenciaAzulEscuro.onclick = function() {
  transparente.style.backgroundColor = '#02103F90';
}

transparenciaVerde.onclick = function() {
  transparente.style.backgroundColor = '#1aa56290';
}

transparenciaVermelho.onclick = function() {
  transparente.style.backgroundColor = '#f0323290';
}

transparenciaPreto.onclick = function() {
  transparente.style.backgroundColor = '#00000090';
}

transparenciaCinza.onclick = function() {
  transparente.style.backgroundColor = '#7b7e8a90';
}

transparenciaBranco.onclick = function() {
  transparente.style.backgroundColor = '#FFFFFF90';
}
