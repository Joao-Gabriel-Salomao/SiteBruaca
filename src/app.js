import express from "express";
import path from 'path';
const app = express();

/**
 * configurações das paginas
 */

app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'pug' )

/*
*Criando a rota da página inicial */
app.get('/', (req, res) => res.render('index'));


export default app;