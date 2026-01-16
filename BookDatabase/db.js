import pg from "pg"
const { Pool } = pg;
const pool = new Pool({
    connectionString: "postgres://localhost:5432/techtonica"
})

export async function getBooks() {
    const { rows } = await pool.query("SELECT * FROM books ORDER by id");
    return rows;
}

export async function getBookById(id) {
    const { rows } = await pool.query("SELECT * FROM books WHERE id = $1", [id]);
    return rows[0] ?? null;
}

export async function createBook(title, author, genre, description, url ) {
    const { rows } = await pool.query(
        "INSERT INTO books (title, author, genre, description,url) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [title, author, genre, description, url]
    );
    return rows[0];
}

export async function updateBook(id,  title, author, genre, description, url ) {
    const { rows } = await pool.query(
        "UPDATE books SET title = $1, author = $2, genre = $3, description = $4, url = $5  WHERE id = $6 RETURNING *",
        [title, author, genre, description, url, id]
    );
    return rows[0] ?? null;
}

export async function deleteBook(id) {
    const { rows } = await pool.query(
        "DELETE FROM books WHERE id = $1 RETURNING id",
        [id]
    );
    return rows[0] ?? null;
}
