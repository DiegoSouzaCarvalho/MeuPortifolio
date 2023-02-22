var botao = document.querySelector('.cabecalho__botao')

function menu (event) {
    if(event.type === 'touchstart') event.preventDefault()
    const navegacao = document.querySelector('.cabecalho__navegacao')
    navegacao.classList.toggle('active')
    const active = navegacao.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', 'active')
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu' )  
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu' )          
    }
}

botao.addEventListener('click', menu)
botao.addEventListener('touchstart', menu)