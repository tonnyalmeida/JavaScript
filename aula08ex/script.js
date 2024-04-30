function contar() {
    let inicio = document.getElementById('ini')
    let fim = document.getElementById('fi')
    let passo = document.getElementById('pass')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossivel contar !"
    } else {
        res.innerHTML = "Contando..."
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Inválido !!!')
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} 🔜`
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} 🔜`
            }
        }
        res.innerHTML += `🏁`             

    }
}



/*
U+200D U+27A1 U+FE0F     U+2642
 */