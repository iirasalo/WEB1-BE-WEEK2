const express = require('express')
const app = express()
const port = 3000

function handler(req, res) {
    res.send('Hello World');
}

app.get('/', handler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})