// import model for use
const Author = require('../models/author.model')

// full CRUD setup in controller READ>CREATE>READ ONE>UPDATE>DELETE
module.exports = {
    // -------------- READ ALL ---------------
    findAll: (req, res) => {
        Author.find({}).sort({name: 1})
            .then(authors => res.json({ authors: authors }))
            .catch(err => {
                console.log(err)
                res.json({ message: "something wrong", error: err })
            })
    }, // at this point create route to do the testing


    // -------------- CREATE ---------------
    create: (req, res) => {
        Author.create(req.body)
            .then(author => res.json({ author: author }))
            .catch(err => {
                console.log(err)
                res.status(400).json({ message: "something wrong", error: err })
            })
    },


    // -------------- READ ONE ---------------
    findOne: (req, res) => {
        Author.findById(req.params.id)
            .then(author => res.json({ author: author }))
            .catch(err => {
                res.status(400).json({ message: "something wrong", error: err })
            })
    },


    // -------------- UPDATE ONE ---------------
    update: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(author => {
                res.json({ author: author })
        })
            .catch(err => {
                console.log(err)
                res.status(400).json({ message: "something wrong", error: err })
            })

    },


    // -------------- DELETE ONE ---------------
    delete: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(author => res.json({ deletedAuthor: author }))
            .catch(err => {
                console.log(err)
                res.json({ message: "something wrong", error: err })
            })
    }
}

