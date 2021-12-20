const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log("connected to mongodb")
})

const noteSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    note: {
        type: String
    }
}, {
    timestamps: {
        createdAt: true,
        updateAt: true
    }
})



const note = mongoose.model("todo", noteSchema)

module.exports = note