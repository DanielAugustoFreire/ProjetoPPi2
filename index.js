import express from 'express';
import path from 'path';

const PORTA = 3000;
const HOST = '0.0.0.0';

const app = express();

var lista_usuario = [];

function processarCadastro(req, res)
{
    const usuario = {
        email: req.query.emailentrada,
        nome: req.query.full_name,
        check1: req.query.check1,
        check2: req.query.check2,
        check3: req.query.check3
    }

    if(usuario.check1 != 1) usuario.check1 = 0;
    if(usuario.check2 != 1) usuario.check2 = 0;
    if(usuario.check3 != 1) usuario.check3 = 0;

    lista_usuario.push(usuario);

    let conteudo = ` <body>
    <h1>Lista de usuário cadastrados</h1>
    <table
        <thead>
            <tr>
                <th>Email</th>
                <th>Nome Completo</th>
                <th>check1</th>
                <th>check2</th>
                <th>check3</th>
            </tr>
        </thead>
        <tbody> `;

    for (const usuario of lista_usuario){
        conteudo += `<tr>
                        <td>${usuario.email}</td>
                        <td>${usuario.nome}</td>
                        <td>${usuario.check1}</td>
                        <td>${usuario.check2}</td>
                        <td>${usuario.check3}</td>
                    <tr>
        `;
    }
    
    app.use(express.static(path.join(process.cwd(),`src`)))

    conteudo+=
    `            </tbody>
    </table>
    <a href="/">Voltar ao menu</a>
    <a href="/cadastro.html">Continuar cadastrando</a>
        </body>
    `


    console.log(lista_usuario);
    res.end(conteudo);
};

function listar(req,res){
    let conteudo = ` <body>
    <h1>Lista de usuarios cadastrados</h1>
    <table
        <thead>
            <tr>
                <th>Email</th>
                <th>Nome Completo</th>
                <th>check1</th>
                <th>check2</th>
                <th>check3</th>
            </tr>
        </thead>
        <tbody> `;

        for (const usuario of lista_usuario){
            conteudo += `<tr>
                            <td>${usuario.email}</td>
                            <td>${usuario.nome}</td>
                            <td>${usuario.check1}</td>
                            <td>${usuario.check2}</td>
                            <td>${usuario.check3}</td>
                        <tr>
            `;
        }

        
    conteudo+=
    `            </tbody>
    </table>
    <a href="/">Voltar ao menu</a>
    `
       
    res.end(conteudo);
};

app.get(`/cadastrarusuario`, processarCadastro);


app.get(`/listar`, listar);

app.get(`/`, (req,res) => {
    app.use(express.static(path.join(process.cwd(),`src`)))

    res.send(`<h1>Responda o seguinte Form:<br><a href="/cadastro.html">Formulario</a></h1><br>
              <h1>Para Listar escreva localhost:3000/listar</h1>  
    `)
});

app.listen(PORTA, HOST, () =>{
    console.log(`Rodando em ${HOST}:${PORTA}`);
});