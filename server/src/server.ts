import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

//Fazer com que o express entenda o formato json
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333);