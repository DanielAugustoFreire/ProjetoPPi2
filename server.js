import app from './src/app.js';

const PORTA = 3000;
const HOST = '0.0.0.0';


app.listen(PORTA, HOST, () => {
    console.log(`Rodando na porta ${PORTA}`);
});