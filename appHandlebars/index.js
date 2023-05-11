const express = require('express')
const Handlebars = require("handlebars")
const exphbs = require('express-handlebars')

const app = express() // construtor de pack

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.get('/', function(req, res){
    const user = {
        name: "Rafa",
        surname: "rere",
        age: 19
    }
    res.render('home', {user:user})
})

app.listen(3000, ()=>{
    console.log("http://localhost:3000/")
})
