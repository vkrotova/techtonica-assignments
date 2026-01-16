import express from 'express';
import { getUsers, createBook, readBook, deleteBook, updateBook } from '../controllers/books.js';

const router = express.Router();

// all routes in here starts with books
// List of books
router.get("/", getUsers);

// CREATE: Add a new book
router.post("/", createBook);

// READ: Find book details
router.get("/:id", readBook);

//DELETE: Delete a book
router.delete("/:id", deleteBook);

// UPDATE: Update a book
router.patch("/:id", updateBook);

export default router;


//*****Change the information inside the file books.js to have your own unique data (we suggest books, but if you want to use any other data, it's ok)
//*****Using Node and Express, create a GET router with a response that converts all using Json()
//*****Using that endpoint build a list of all your books in the backend(server side).
//Using Node and Express, create a route for each one of the verbs in CRUD operations in the backend. You don't need to have a frontend. You can test your API using Postman.
//Have at least 50 commits
//Optional Bonus: Using that endpoint build a list of all your books in the frontend (client side). Note: you will need to make a GET request to bring all your information to the frontend too
