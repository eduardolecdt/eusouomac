document.addEventListener('input', (evento) => { handler(evento.target) })
document.addEventListener('keyup', (evento) => { handler(evento.target) })
document.addEventListener('click', (evento) => { handler(evento.target) })

function handler (textarea) {
  if (textarea.tagName !== 'TEXTAREA') return

  textarea.style.height = 'inherit'
  textarea.style.height = `${textarea.scrollHeight}px`
}
