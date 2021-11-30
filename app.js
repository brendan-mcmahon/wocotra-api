const express = require('express')
let cors = require("cors");
const app = express()
const port = 5000

var corsOptions = {
    origin: "http://localhost:3000"
};
  
app.use(cors(corsOptions));
app.use(express.json());

var userController = require("./controllers/user.js");
var projectController = require("./controllers/project.js");
var logController = require("./controllers/log.js");

app.use('/users', userController);
app.use('/projects', projectController);
app.use('/logs', logController);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})