const inputFile = document.querySelector('section.ferramenta .objetos .selecionar input[type="file"]')
const imagemFundo = document.querySelector('section.ferramenta .visualizacao')
const selecionarImagem = document.querySelector('section.ferramenta .objetos .selecionar button')

selecionarImagem.addEventListener('click', () => {
  inputFile.click()
})

inputFile.addEventListener('change', () => {
  const imagem = inputFile.files[0]

  const fileReader = new window.FileReader()
  fileReader.readAsDataURL(imagem)
  fileReader.onload = () => {
    imagemFundo.style.backgroundImage = `url(${fileReader.result})`
  }
})
