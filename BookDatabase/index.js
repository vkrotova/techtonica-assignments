import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const PORT = 5001;
app.use(bodyParser.json());

app.get("/books", (req, res) => { ///api endpoint
    res.json(BOOKS);