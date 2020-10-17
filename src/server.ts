import express from 'express';
import './database/connection';
import routes from './routes';

const app = express();

app.use(express.json()); //permite o uso de JSON nas requisições HTTP
app.use(routes);

app.listen(3333, ()=> {
    console.log('Servidor rodando na porta 3333!');
});
