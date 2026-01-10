import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const PORT = 5001;
app.use(bodyParser.json());

import bookRoutes from './routes/books.js';

app.get("/books", (req, res) => { ///api endpoint //Using Node and Express, create a GET router with a response that converts all using Json()
    res.json(BOOKS);

});
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)); //running our server


//Hardcoded data
const books = [
    {
        id: 1,
        title: "MARS",
        author: "Fuyumi Soryo",
        genre: "Manga",
        description:
        url: https: "https://bloomreviewsblog.com/wp-content/uploads/2016/09/rei-kira-bike.jpg"
    },
    {
        id: 2,
        title: "Demon Slayer: Kimetsu no Yaiba",
        author: "Koyoharu Gotouge",
        genre: "Manga",
    },
    {
        id: 3,
        title: "One Piece",
        author: "Eiichiro Oda",
        genre: "Manga",
        description:
        url: "https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg"

    },

    {
        id: 4,
        titile: "Boys Over Flowers"
        author: "Yoko Kamio"
        genre: "manga"
        description:
        url: https:"//m.media-amazon.com/images/I/91UOsHhcByL._SL1500_.jpg"



    },

    {
        id: 5, 
        title: "Sailor Moon"
        author: "Naoko Takeuchi",
        genre: "Manga",
        description:
        url: "https://i0.wp.com/www.syfy.com/sites/syfy/files/styles/1200x1200/public/wire/legacy/sailormoon.jpg"


    },


{

     id: 6,
        title: "Marmalade Boy",
        author: "Fuyumi Soryo",
        genre: "Manga",
        description:
        url: https:


},


{

     id: 7,
        title: "",
        author: "",
        genre: "",
        description:
        url: https:


},

{

     id: 8,
        title: "",
        author: "",
        genre: "",
        description:
        url: https:


},

{

     id: 9,
        title: "",
        author: "",
        genre: "",
        description:
        url: https:


},

{

     id: 10,
        title: "",
        author: "",
        genre: "",
        description:
        url: https:


},

{

     id: 1,
        title: "",
        author: "",
        genre: "",
        description:
        url: https:


},

{

     id: 12,
        title: "",
        author: "",
        genre: "",
        description:
        url: https:


},





{

     id: 12,
        title: "",
        author: "",
        genre: "",
        description:
        url: https:


},




];




//Change the information inside the file books.js to have your own unique data (we suggest books, but if you want to use any other data, it's ok)
//*****Using Node and Express, create a GET router with a response that converts all using Json()
//*****Using that endpoint build a list of all your books in the backend(server side).
//Using Node and Express, create a route for each one of the verbs in CRUD operations in the backend. You don't need to have a frontend. You can test your API using Postman.
//Have at least 50 commits
//Optional Bonus: Using that endpoint build a list of all your books in the frontend (client side). Note: you will need to make a GET request to bring all your information to the frontend too
