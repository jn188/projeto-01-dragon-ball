
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");
const conteudos = document.querySelectorAll(".conteudo");

function removerSelecao(classe) {
    const itemSelecionado = document.querySelector(`${classe}.selecionado`);
    if (itemSelecionado) itemSelecionado.classList.remove("selecionado");
}

function adicionarSelecao(itens, indice) {
    itens[indice].classList.add("selecionado");
}

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        removerSelecao(".botao");
        removerSelecao(".personagem");
        removerSelecao(".conteudo");

        adicionarSelecao(botoes, indice);
        adicionarSelecao(personagens, indice);
        adicionarSelecao(conteudos, indice);
    });
});
