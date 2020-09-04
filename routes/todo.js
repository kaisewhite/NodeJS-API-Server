var router = require("express").Router();
const database = require("../database/index");
const morgan = require("morgan");
router.use(morgan("dev"));

const cors = require("cors");
router.use(cors());
//Get all todos
router.get("/", async (req, res) => {
  try {
    const allTodos = await database.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.log(err.message);
  }
});

//Create a todo
router.post("/", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await database.query("INSERT INTO todo (description) VALUES ($1) RETURNING *", [description]);
    res.json(newTodo.rows[0]);
    console.log(req.body);
  } catch (err) {
    console.log(err.message);
  }
});

//Get a todo with a specific ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await database.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
    res.status(200).json({ status: "Success", parameters: req.params, data: todo.rows[0] });
    console.log(req.body);
  } catch (err) {
    console.log(err.message);
  }
});

//Update a todo

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await database.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
    res.json("Todo was updated");
  } catch (err) {
    console.log(err.message);
  }
});

//Delete a todo
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await database.query("DELETE FROM todo WHERE todo_id = $1", [id]);
    res.json("Todo was deleted");
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
