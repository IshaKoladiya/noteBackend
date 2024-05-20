const express = require('express')
// cors
var cors = require('cors')

// connect with mongoDB using Mongoose
let connectWithMongo = require('./database');

// Create API using express
const app = express()
const port = 6000

connectWithMongo();

// Middleware
app.use( express.json() );
app.use(cors())

// Welcome Routes
app.get('/', (req, res) => {
  res.send('Hello NOVA!')
})

// Available Routes
app.use('/api/user',require('./Routes/user'));
app.use('/api/note',require('./Routes/notes'));

app.listen(port, () => {
  console.log(`MyNotes Backend listening on port ${port}`)
})

