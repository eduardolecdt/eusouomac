const youtubeVideos = document.querySelectorAll('.youtube-video')

youtubeVideos.forEach(youtubeVideo => {
  const thumbnail = `https://img.youtube.com/vi/${youtubeVideo.dataset.embed}/sddefault.jpg`
  let listYoutube = ''

  if (youtubeVideo.getAttribute('data-list')) listYoutube = `&list=${youtubeVideo.dataset.list}`

  const image = new window.Image()
  image.src = thumbnail
  image.addEventListener('load', () => {
    youtubeVideo.appendChild(image)
  })

  youtubeVideo.addEventListener('click', () => {
    const iframe = document.createElement('iframe')
    iframe.setAttribute('frameborder', '1')
    iframe.setAttribute('allowfullscreen', '')
    iframe.setAttribute('src', `https://www.youtube.com/embed/${youtubeVideo.dataset.embed}?rel=0&showinfo=0&autoplay=1&modestbranding=1${listYoutube}`)
    youtubeVideo.innerHTML = ''
    youtubeVideo.appendChild(iframe)
  })
})
