import * as db from "../db.js"

//Hardcoded data
let books = [

    {
        id: 1,
        title: "MARS",
        author: "Fuyumi Soryo",
        genre: "Manga",
        description: "A dramatic romance manga about love and trauma",
        url: "https://bloomreviewsblog.com/wp-content/uploads/2016/09/rei-kira-bike.jpg"
    },

{
        id: 2,
        title: "Demon Slayer: Kimetsu no Yaiba",
        author: "Koyoharu Gotouge",
        genre: "Manga",
        description: "",
        url: ""
    },

    {
        id: 3,
        title: "One Piece",
        author: "Eiichiro Oda",
        genre: "Manga",
        description: "",
        url: "https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg"
    },
    {
        id: 4,
        title: "Boys Over Flowers",
        author: "Yoko Kamio",
        genre: "Manga",
        description: "",
        url: "https://m.media-amazon.com/images/I/91UOsHhcByL._SL1500_.jpg"
    },
    {
        id: 5,
        title: "Sailor Moon",
        author: "Naoko Takeuchi",
        genre: "Manga",
        description: "",
        url: "https://i0.wp.com/www.syfy.com/sites/syfy/files/styles/1200x1200/public/wire/legacy/sailormoon.jpg"
    },
    {
        id: 6,
        title: "Marmalade Boy",
        author: "Wataru Yoshizumi",
        genre: "Manga",
        description: "",
        url: "https://m.media-amazon.com/images/M/MV5BNWIxZjQxMDgtZjM4YS00ZTEyLTliNGItMDYyMzg1NWIwNzY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: 7,
        title: "His and Her Circumstances",
        author: "Masami Tsuda",
        genre: "Manga",
        description: "",
        url: "https://m.media-amazon.com/images/I/519N1D3AWXL.jpg"
    },
    {
        id: 8,
        title: "From Me to You",
        author: "Karuho Shiina",
        genre: "Manga",
        description: "",
        url: "https://m.media-amazon.com/images/I/81Jp-JCMgbL._SL1500_.jpg"
    },
    {
        id: 9,
        title: "Good Morning Call",
        author: "Yue Takasuka",
        genre: "Manga",
        description: "",
        url: "https://d3tvwjfge35btc.cloudfront.net/Assets/10/049/L_p1001804910.jpg"
    },
    {
        id: 10,
        title: "",
        author: "",
        genre: "",
        description: "",
        url: ""
    },
    {
        id: 11,
        title: "Astro Boy",
        author: "Osamu Tezuka",
        genre: "Manga",
        description: "",
        url: "https://upload.wikimedia.org/wikipedia/en/a/a6/Astro_Boy-08.jpg"
    },
    {
        id: 12,
        title: "My Hero Academia",
        author: "Kōhei Horikoshi",
        genre: "Manga",
        description: "",
        url: "https://upload.wikimedia.org/wikipedia/en/5/5a/Boku_no_Hero_Academia_Volume_1.png"
    }


];

export async function getUsers (req, res) {
    const books_db = await db.getBooks();
    res.json(books_db);
}

export async function createBook (req, res) {
   //console.log('POST ROUTE REACHED');
   
   //Get message from postman 
    const { title, author, genre, description, url } = req.body;

    //Create a record to add to the list
    /*const newBook = {
        id: books.length ? books[books.length - 1].id + 1 : 1,
        title,
        author,
        genre,
        description,
        url
    };
    */
   // books.push(newBook);

   res.send(`Book with the name ${title} added to the database!`);
}

export const readBook = (req, res) => {
    
    const id = parseInt(req.params.id);
    //console.log(id);
    const foundBook = books.find((book) => book.id === id);
    //console.log(foundBook);
    if (!foundBook) return res.status(404).json({ message: "Book not found" });

    res.json(foundBook);
}

export const deleteBook = (req, res) => {
    
    const id = parseInt(req.params.id);
    //console.log(id);

    books = books.filter((book) => book.id !== id);
    //console.log(foundBook);
    //if (!foundBook) return res.status(404).json({ message: "Book not found" });

    res.send(`Book with the id: ${id} deleted from the database!`);
}

export const updateBook = (req, res) => {
   

   //Get message from postman
   const id = parseInt(req.params.id);
   const { title, author, genre, description, url } = req.body;

   // Find book to update
   const foundBook = books.find((book) => book.id === id);

   if(title) foundBook.title = title;
   if(author) foundBook.author = author;
   if(genre) foundBook.genre = genre;
   if(description) foundBook.description = description;
   if(url) foundBook.url = url;

   res.send(`Book with the id: ${id} has been updated!`);
}