const express = require('express')
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000

//template engine
app.engine('hbs', engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'))
console.log(path.join(__dirname, 'resource/views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))


app.get('/', (req,res) => {
    res.render('home')
})

app.get('/detal', (req,res) => {
    res.render('detal')
})

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
})