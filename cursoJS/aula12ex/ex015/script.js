function verificar() {
  let date = new Date()
  let year = date.getFullYear()
  let formYear = document.getElementById('txtano')
  let res = document.querySelector('div#res')

  if (formYear.value.length == 0 || Number(formYear.value) > year) {
    window.alert('[ERRO] Verifique os dados e tente novamente')
  } else {
    let fsex = document.getElementsByName('radsex')
    let age = year - Number(formYear.value)
    let gender = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      gender = 'Homem'
      if (age >= 0 && age < 10) {
        //criança
        img.setAttribute('src', 'crianca-m.png')
      } else if (age < 21) {
        //jovem
        img.setAttribute('src', 'jovem-m.png')
      } else if (age < 60) {
        //adulto
        img.setAttribute('src', 'adulto-m.png')
      } else {
        //idoso
        img.setAttribute('src', 'idoso-m.png')
      }
    } else if (fsex[1].checked) {
      gender = 'Mulher'
      if (age >= 0 && age < 10) {
        //criança
        img.setAttribute('src', 'crianca-f.png')
      } else if (age < 21) {
        //jovem
        img.setAttribute('src', 'jovem-f.png')
      } else if (age < 60) {
        //adulto
        img.setAttribute('src', 'adulto-f.png')
      } else {
        //idoso
        img.setAttribute('src', 'idosa-f.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gender} com ${age} anos`
    res.appendChild(img)
  }
}