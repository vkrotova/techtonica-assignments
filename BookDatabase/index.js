import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import books from './books.js'
const app = express();
const PORT = 5001;
app.use(cors());
app.use(bodyParser.json());
//app.use('/books, booksRoutes');

app.get('/', (req,res)=>{
    res.json("Hello this is my server")
}) 
//import bookRoutes from './routes/books.js';

// READ: Get book by ID
app.get("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = booksData.find(b => b.id === id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
});

// CREATE: Add a new book
app.post("/books", (req, res) => {
    const { title, author, genre, description, url } = req.body;
    const newBook = {
        id: booksData.length ? booksData[booksData.length - 1].id + 1 : 1,
        title,
        author,
        genre,
        description,
        url
    };
    booksData.push(newBook);
    res.status(201).json(newBook);
});

app.get("/books", (req, res) => { ///api endpoint //Using Node and Express, create a GET router with a response that converts all using Json()
    res.json(books);

});
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)); //running our server

