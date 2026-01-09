import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const PORT = 5001;
app.use(bodyParser.json());

app.get("/books", (req, res) => { ///api endpoint
    res.json(BOOKS);

    });
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)); //running our server


//Hardcoded data
const books = [
     {
    id:1,
    title: "Javacript For Kids",
    author: "Nick Morgan",
    genre: "Coding",
  },
  {
id: 2,
title: "Eloquent Javascript",
    author: "Marijn Haverbeke",
    genre: "Coding",
  }
  {
id: 3, 
title: "Effective Javascript",
author: "David Herman",
genre: "Coding",

  }

];