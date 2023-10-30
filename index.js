import express from 'express';

const porta = 3000;
const host = '0.0.0.0';

const app = express();

app.use(express.static('./paginas'));

app.get(`/`, function(req,res){
    res.send(`<a href="cadastro.html">Entre para cadastrar-se</a>`)
});

app.listen(porta, host, () => {
    console.log(`Rodando na porta ${porta}`);
});