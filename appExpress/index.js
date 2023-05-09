const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const basePath = path.join(__dirname, 'templates') // abre o diretório templates

const users = require('./users')

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())
app.use(express.static('public'))

app.use('/users', users)
app.get('/', (req, res) => { 
    res.sendFile(`${basePath}/index.html`)
})

app.use(
    function(req, res, next){
        res.status(404).sendFile(`${basePath}/404.html`)
    }
)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

