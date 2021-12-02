const express = require('express')
const cors = require('cors');
const fs = require("fs");

// setup express listening server
const app = express()
const port = 3000
app.use(cors());
app.options('*', cors());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//setup express to parse request body
app.use(express.json());
app.use(express.urlencoded({extended: true}));



// handle endpoints
// /post new user with timestamp of entry
app.post('/register', (req, res) => {
  var data = req.body

  let today = new Date().toLocaleString();

  var ws = fs.createWriteStream('users.txt', {flags: 'a'});
  ws.write( 'Email: ' + data["Email"] + '\n')
  ws.write( 'Password: ' + data["Password"] + '\n')
  ws.write( 'Date: ' + today + '\n')
  ws.end();

  res.send('User registration received')
})
var users = [
    {name:'Dave', phone:'021914357', country:'New Zealand'},
    {name:'Sarah', phone:'021917730', country:'New Zealand'},
    {name:'Cody', phone:'021777555', country:'Prestons'},
    ]
// get all users from file users.txt
app.get('/users', (req, res) => {
  fs.readFile("users.txt", "utf-8", (err, data) => {
    res.send(data);
  });
    
})

// app.get('/users', (req, res) => {

//   res.send(users)

// })

