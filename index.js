import express from 'express';
import path from 'path';

const PORTA = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get(`/`, (req,res) => {
    app.use(express.static(path.join(process.cwd(),`src`)))

    res.send(`<h1>Responda o seguinte Form:<br><a href="/cadastro.html">Formulario</a></h1>`)
});

app.listen(PORTA, HOST, () =>{
    console.log(`Rodando em ${HOST}:${PORTA}`);
});