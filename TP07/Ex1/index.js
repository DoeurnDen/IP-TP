const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000

app.get('/', function (req, res) {
  // res.send("Hello World")
    fs.readFile('./src/index.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.send("There is a server error");
      }
      res.send(data);
    });
  })

app.listen(port, () =>{
  console.log(`Example app listening at http://localhost:${port}`)
})