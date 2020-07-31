// COR arroba

const alinhamentoEsquerda = document.getElementById('alinhamento_esquerda')
const alinhamentoMeio = document.getElementById('alinhamento_meio')
const alinhamentoDireita = document.getElementById('alinhamento_direita')
const textareaSubtitulo = document.getElementById('subtitulo')
const textareaTitulo = document.getElementById('titulo')
const textareaArroba = document.getElementById('arroba')

alinhamentoEsquerda.onclick = function() {
  textareaSubtitulo.style.textAlign = 'left';
  textareaTitulo.style.textAlign = 'left';
  textareaArroba.style.textAlign = 'left';
}

alinhamentoMeio.onclick = function() {
  textareaSubtitulo.style.textAlign = 'center';
  textareaTitulo.style.textAlign = 'center';
  textareaArroba.style.textAlign = 'center';
}

alinhamentoDireita.onclick = function() {
  textareaSubtitulo.style.textAlign = 'right';
  textareaTitulo.style.textAlign = 'right';
  textareaArroba.style.textAlign = 'right';
}
