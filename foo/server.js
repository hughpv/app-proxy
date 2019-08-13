const express = require('express')
const app = express()
const port = 8080

app.get('/foo/', (req, res) => res.send('foo app'))

app.listen(port, () => console.log(`foo app listening on port ${port}!`))