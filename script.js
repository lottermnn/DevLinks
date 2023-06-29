function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag imag
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Mascara")
  } else {
    //se tiver sem light mode, mandar a imagem nomarl
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Sem mascara")
  }
}
