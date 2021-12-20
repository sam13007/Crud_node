const express = require("express")
const notes = require("../Controller/notes")
const router = express.Router()

router.get("/", notes.fetchNote);
router.post("/", notes.postNote)
router.get("/:id", notes.fetchNoteById)
router.put("/:id", notes.updateNote)
router.delete("/:id", notes.deleteNote)
module.exports = router