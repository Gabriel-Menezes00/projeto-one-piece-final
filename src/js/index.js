
const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        
        desselecionarBotao();
        desselecionarPeesonagem();
        
        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarPeesonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
