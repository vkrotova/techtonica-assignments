import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import booksRoutes from './routes/books.js'

const app = express();
const PORT = 5001;
app.use(cors());
app.use(bodyParser.json());

app.use('/books', booksRoutes);

/*Running HomePage */
app.get('/', (req,res)=>{
    res.json("Hello this is my Home Page");
}) 


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)); //running our server

