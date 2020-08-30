const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database");
const portNumber = 5000;

//Middleware
/**
 * Anytime you want a middleware you have to use app.use
 */
app.use(cors());
/**
 * Anytime we are building a fullstack application, you need to get data from the client side
 * and the only way to get data from the client side is to get it from the request.body object
 * So this will give us access and then we can get JSON data.
 */
app.use(express.json()); //req.body

/** ROUTES */
app.get("/", async (req, res) => {
  try {
    res.json({ info: "Node.js, Express, and Postgres API" });
  } catch (err) {
    console.log(err.message);
  }
});
//Create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *", [description]);
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//Get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.log(err.message);
  }
});

//Get a todo with a specific ID
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
    res.json(todo.rows[0]);
    console.log(req.params);
  } catch (err) {
    console.log(err.message);
  }
});

//Update a todo

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
    res.json("Todo was updated");
  } catch (err) {
    console.log(err.message);
  }
});

//Delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
    res.json("Todo was deleted");
  } catch (err) {
    console.log(err.message);
  }
});

/**
 * Anytime we want our server to start we have to listen to a port number
 */
app.listen(portNumber, () => {
  //Callback function to indicate that the server has started on port 5000
  console.log(`Server has started on ${[portNumber]}`);
});
