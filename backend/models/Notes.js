const { default: mongoose, Schema } = require("mongoose");

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: date.now
    }
})

module.exports = mongoose.model('notes', NoteSchema);