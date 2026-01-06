import express from 'express';
const app = express();
import bodyParser from 'body-parser';

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