function deslizar () {
    let botaoNao = document.getElementById("nao")

    let larguraDaJanela = window.innerWidth
    let alturaDaJanela = window.innerHeight

    let maxX = larguraDaJanela - botaoNao.offsetWidth
    let maxY = alturaDaJanela - botaoNao.offsetHeight

    let aleatorioX = Math.random() * maxX
    let aleatorioY = Math.random() * maxY

    if (!botaoNao.style.left || !botaoNao.style.top) {
        botaoNao.style.left = `${botaoNao.offsetLeft}px`
        botaoNao.style.top = `${botaoNao.offsetTop}px`
    }

    requestAnimationFrame(() => {
        botaoNao.style.left = `${aleatorioX}px`
        botaoNao.style.top = `${aleatorioY}px`
    })
}

document.getElementById("nao").addEventListener("touchstart", deslizar)