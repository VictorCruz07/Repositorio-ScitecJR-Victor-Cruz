const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

const meusFilmes = [
    { id: 1, titulo: "Inception", ano: 2010, genero: "Ficção Científica", sinopse: "Inception (conhecido como A Origem no Brasil) acompanha Dom Cobb, um habilidoso ladrão que rouba segredos corporativos ao invadir o subconsciente das pessoas durante o sono. Desesperado para rever seus filhos, ele aceita uma missão impossível: plantar uma ideia na mente de um herdeiro em vez de roubá-la, enfrentando os perigos das camadas oníricas e seu próprio passado." },
    { id: 2, titulo: "The Matrix", ano: 1999, genero: "Ficção Científica", sinopse: "Matrix (1999) acompanha Thomas Anderson (Keanu Reeves), um programador e hacker conhecido como Neo. Ele descobre que a realidade ao seu redor é uma simulação virtual chamada \"Matrix\", criada por máquinas para escravizar a humanidade e usar seus corpos como fonte de energia." },
    { id: 3, titulo: "Interstellar", ano: 2014, genero: "Ficção Científica", sinopse: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar." }
];

app.get('/', (req, res) => {
    res.render('inicio'); 
});

app.get('/filmes', (req, res) => {
    res.render('filmes', { lista: meusFilmes });
});

app.get('/contato', (req, res) => {
    res.render('contato');
});

app.get('/filmes/:idDoFilme', (req, res) => {
    const idProcurado = parseInt(req.params.idDoFilme);
    const filmeEncontrado = meusFilmes.find(f => f.id === idProcurado);

    if (filmeEncontrado) {
        res.render('detalhe', { filme: filmeEncontrado });
    } else {
        res.send("Filme não encontrado!");
    }
});

app.get('/api/filmes', (req, res) => {
    res.json(meusFilmes);
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});