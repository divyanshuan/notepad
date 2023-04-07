const express = require("express");

const router = express.Router();

const noteController = require("../controller/notes");

router.get("/add-notes", noteController.getAddNotes);
router.post("/add-notes", noteController.postAddNotes);
router.get("/my-notes", noteController.getDisplayNotes);

module.exports = router;
