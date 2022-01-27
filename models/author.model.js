// import mongoose
const mongoose = require('mongoose');
// built the schema from mongoose
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "{PATH} must be present"],
        minlength: [5, "{PATH} need 5 chars at least"]
    }
}, {timeStamps: true})

// build the model and export for controller use
const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;