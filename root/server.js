const express = require('express')
const app = express()
const port = 8080

app.use(require('morgan')('dev'))
app.get('/', (req, res) => res.send('root app'))
app.get('/bar/', (req, res) => res.send('root app (bar)'))

app.listen(port, () => console.log(`root app listening on port ${port}!`))