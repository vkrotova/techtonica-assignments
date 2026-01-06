import express from 'express';
const app = express();
const PORT = 5000
import bodyParser from 'body-parser';

app.use(bodyParser.json());

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