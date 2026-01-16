import pg from "pg"
const {Pool} = pg;
const pool = new Pool({
    connectionString: "postgres://localhost:5432/techtonica"
})

export async function getBooks(){
    const {rows} = await pool.query("SELECT * FROM books ORDER by id");
    return rows;
}

export async function createBook({title, author, genre, description, url}) {
            const {rows} = await pool.query(
                "INSERT INTO books (title, author, genre, description,url) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            );
            return rows[0];
        }