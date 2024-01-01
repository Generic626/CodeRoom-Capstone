const express = require("express");
const router = express.Router();
const notebookController = require("../controller/noteobook-controllers");

// /api/notebook
router.route("/").post(notebookController.createNotebook);

module.exports = router;
