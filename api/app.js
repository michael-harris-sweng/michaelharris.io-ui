const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors());
const port = 4000

app.get('/hello', (_req, res) => {
    res.send({ status: 200, body: 'Hello World!' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})