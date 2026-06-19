const fotos = document.querySelectorAll('.foto');
const btnEsquerda = document.getElementById('btn-esquerda');
const btnDireita = document.getElementById('btn-direita');

let indiceSelecionado = 0;

function atualizarGaleria() {
    fotos.forEach((foto, indice) => {
        if (indice === indiceSelecionado) {
            foto.classList.add('selecionada');
        } else {
            foto.classList.remove('selecionada');
        }
    });
}

btnDireita.addEventListener('click', () => {
    if (indiceSelecionado < fotos.length - 1) {
        indiceSelecionado++;
        atualizarGaleria();
    }
});

btnEsquerda.addEventListener('click', () => {
    if (indiceSelecionado > 0) {
        indiceSelecionado--;
        atualizarGaleria();
    }
});