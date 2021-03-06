const note = require("../Model/Schema")
    //Read operation
exports.fetchNote = async(req, res) => {
    try {
        const notes = await note.find()
        res.send(notes)
    } catch (err) {
        console.log(err)
    }
}

exports.fetchNoteById = async(req, res) => {
    try {
        const notes = await note.find({ id: req.params.id })
        res.send(notes[0].note)
    } catch (error) {
        console.log(error)
    }
}

//Create operation
exports.postNote = async(req, res) => {
    try {
        const noteObj = {
            id: req.body.id,
            note: req.body.note
        }
        const noteAdd = await note.create(noteObj)
        console.log(noteAdd)
        res.send(noteAdd)
    } catch (err) {
        console.log(err)
    }
}

//Update operation
exports.updateNote = async(req, res) => {
    try {
        const notes = await note.findOneAndUpdate({ id: req.params.id }, {
            note: req.body.note
        }, {
            new: true,
            runValidators: true
        })
        res.send(notes)
    } catch (err) {
        console.log(err)
    }
}

//Delete operation
exports.deleteNote = async(req, res) => {
    try {
        const notes = await note.deleteOne({ id: req.params.id })
        res.send(notes)
    } catch (err) {
        console.log(err)
    }
}