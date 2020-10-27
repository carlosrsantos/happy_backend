import express from 'express';
import cors from 'cors'; //executar api em diferentes domínios
import path from 'path';
import 'express-async-errors'; //capturar erros de validação e execução
import './database/connection';
import errorHandler from './errors/handler';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json()); //permite o uso de JSON nas requisições HTTP
app.use(routes);

//                                              diretório do arquivo .. ..
app.use('/uploads', express.static(path.join(__dirname, '..', 'src', 'uploads')));


app.use(errorHandler)

app.listen(3333);