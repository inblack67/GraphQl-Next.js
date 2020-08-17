const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    genre: {
        type: String,
        required: true,
    },
    authorId: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.models.Book || mongoose.model('Book', BookSchema);