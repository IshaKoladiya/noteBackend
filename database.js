const mongoose = require("mongoose");
// const mongoDbURI = 'mongodb://0.0.0.0:27017/inotebook';
const mongoDbURI ="mongodb+srv://User2004:Notes412@database.t06p0el.mongodb.net/iNoteBooks";

let connectWithMongo = () => {
  mongoose.connect( mongoDbURI );
};

module.exports = connectWithMongo;
