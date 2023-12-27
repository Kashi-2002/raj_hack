const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 

connectToMongo();
const app = express()
const port = 5000


app.use(cors());
app.use(express.urlencoded({extended : false}))

app.use(require('./Routes/authUser'))
app.use(require('./Routes/FileComplaint'))


app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`)
})