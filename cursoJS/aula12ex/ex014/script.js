function carregar() {
    let msg = document.getElementById('msg')
    let img = document.querySelector('div#imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora <12) {
        //Bom Dia
        img.src = 'fotomanha'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'fototarde'
    } else {
        //Boa noite
        img.src = 'fotonoite'
    }
}