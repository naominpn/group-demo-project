const express = require('express')
const app = express()
const port = 4567

app.get('/', (req, res) => res.send('hello world'))

app.listen(port, () => console.log(`listening on port: ${port}`))


const cat = "Cat goes brrrr";
