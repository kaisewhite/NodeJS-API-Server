require("dotenv").config(); //Enables environment variables
/**
 * This will grab the port number from ./.env but if there is no port number
 * defined then we will give it a default value
 */
const portNumber = process.env.PORT || 3001;
const express = require("express");
const app = express();
const cors = require("cors");
const database = require("./database/index");
const morgan = require("morgan");
const bodyParser = require("body-parser");

//Multple Routes
app.use("/qualify", require("./routes/qualify"));
app.use("/discoveries", require("./routes/discoveries"));
app.use("/api/v1/todos", require("./routes/todo")); //Delete later

//Middleware
/**
 * Anytime you want a middleware you have to use app.use
 */
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
/**
 * Anytime we are building a fullstack application, you need to get data from the client side
 * and the only way to get data from the client side is to get it from the request.body object
 * So this will give us access and then we can get JSON data.
 */
app.use(express.json()); //req.body
/**
 * Middleware
 */
app.use(morgan("dev")); //"combined"

/**
 * Anytime we want our server to start we have to listen to a port number
 */
app.listen(portNumber, () => {
  //Callback function to indicate that the server has started on port 5000
  console.log(`Server has started on ${[portNumber]}`);
});

/******************************** R O U T E S ***************************************/
app.get("/", async (req, res) => {
  try {
    var today = new Date().toString();
    const info = { application: "Clowse-API-Server", version: 1.0, info: "Node.js, Express, and PostgreSQL", date: today };
    res.json(info);
  } catch (err) {
    console.log(err.message);
  }
});
