const cors = require('cors');

const express = require('express')
const app = express()
const port = 3000
app.use(cors());
app.options('*', cors());
var users = [
    {name:'Dave', phone:'021914357', country:'New Zealand'},
    {name:'Sarah', phone:'021917730', country:'New Zealand'},
    {name:'Cody', phone:'021777555', country:'Prestons'},
    ]
   
app.get('/', (req, res) => {

res.send(
    )
})

app.get('/users', (req, res) => {

  res.send(users)

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})