const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
    // findAll route once update go back to server to import route
    app.get("/api/authors", AuthorController.findAll)
    app.post("/api/authors", AuthorController.create)
    app.get("/api/authors/:id", AuthorController.findOne)
    app.put("/api/authors/:id", AuthorController.update)
    app.delete("/api/authors/:id", AuthorController.delete)
}