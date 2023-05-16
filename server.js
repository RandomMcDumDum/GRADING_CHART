const express = require('express')
const path = require('path');
const app = express()
const PORT = 5000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Send index HTML file
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '/index.html'))
// })

// Respond with Rendered EJS
app.get('/', function(req, res) {
    res.render('index.ejs')
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}, you better go catch it!`)
})