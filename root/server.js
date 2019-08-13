const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => res.send('root app'))

app.listen(port, () => console.log(`root app listening on port ${port}!`))