var router = require("express").Router();
const database = require("../database/index");
const morgan = require("morgan");
router.use(morgan("dev"));
const cors = require("cors");
router.use(cors());

/** ROUTES */

router.get("/", function (req, res) {
  res.send("Discoveries Page");
});

module.exports = router;
