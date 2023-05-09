var express = require('express')
const { userInfo } = require('os')
var router = express.Router()
const path = require('path')
const basePath = path.join(__dirname, '../templates')
const fs = require('fs')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

router.post('/save', (req, res) => { //post para fazer o envio para o Backend
    console.log(req.body)
    let name = req.body.name
    let age = req.body.age

    if(!fs.existsSync('accounts'))
            {
                fs.mkdirSync('accounts')
            }
            if(fs.existsSync(`accounts/${name}.json`))
            {
                res.status(409).sendFile(`${basePath}/erro.html`)
                return
            }

            fs.writeFileSync(
                `accounts/${name}.json`,
                `{"name": "${name}", "age":${age}}`,
                function(err){
                    console.error(err)
                }
            )

    console.info(name)
    console.info(age)
    res.status(201).sendFile(`${basePath}/userForm.html`)
})

router.get('/:id', (req, res) => { 
    console.log(`Carregando usuário: ${req.params.id}`)

    res.sendFile(`${basePath}/user.html`)
})

module.exports = router