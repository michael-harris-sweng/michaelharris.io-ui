const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send({ status: 200, body: JSON.stringify('Hello World!') })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})