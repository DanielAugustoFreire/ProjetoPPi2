import express from 'express';

const app = express();

const SELECOES = [
    {id: 1, selecao:`Brasil`, grupo:`G`},
    {id: 2, selecao:`Noruega`, grupo:`G`},
    {id: 3, selecao:`Japao`, grupo:`G`},
    {id: 4, selecao:`India`, grupo:`G`}
]

app.get(`/`, function(req,res){
    res.send(`<a href="cadastro.html">Entre para cadastrar-se</a>`)
});

app.get('/selecoes', (req, res) => {
    res.status(200).send(SELECOES);

    res.end();
});


export default app;