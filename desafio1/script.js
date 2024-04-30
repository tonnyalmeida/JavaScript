function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 5
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 6) {
        //bom dia
        img.style.backgroundImage = "url('imagens/foto-madrugada.jpg')"
        document.body.style.background = '#5D559A'
    } else if (hora >= 6 && hora <= 11) {
        //boa tarde
        img.style.backgroundImage = "url('imagens/foto-manha.jpg')"
        document.body.style.background = '#FCC06B'
    } else if (hora >= 12 && hora < 18) {
        //boa noite
        img.style.backgroundImage = "url('imagens/foto-tarde.jpg')"
        document.body.style.background = '#9AD1DA'
    } else {
        img.style.backgroundImage = "url('imagens/foto-noite.jpg')"
        document.body.style.background = '#023165'
    }
}

// cor manha : #FCC06B
//cor tarde : #9AD1DA
//cor noite : #023165
//cor da madruga : #5D559A