// import mongoose
const mongoose = require('mongoose');

// export the data connection for server use
module.exports = (DB) => {
    mongoose.connect(`mongodb://localhost/${DB}`)
        .then(() => console.log(`connect to ${DB} database`))
        .catch(err => console.log(`DB connection error`, err))
}