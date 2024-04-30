function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.style.backgroundImage = "url('imagens/foto-manha.jpg')"
        document.body.style.background = '#FCC06B'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.style.backgroundImage = "url('imagens/foto-tarde.jpg')"
        document.body.style.background = '#9AD1DA'
    } else {
        //boa noite
        img.style.backgroundImage = "url('imagens/foto-noite.jpg')"
        document.body.style.background = '#2D3F4D'
    }
}

// cor manha : #FCC06B
//cor tarde : #9AD1DA
//cor noite : #101418