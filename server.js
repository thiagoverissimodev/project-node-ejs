const express = require('express')
const app = express()
app.use(express.static('public'));
app.use('/css', 
express.static(__dirname + 'public/css'))
app.set('view engine','ejs')
app.get("/", function(request, response){
    response.render('pages/index')
})
app.get("/sobre", function(request, response){
    response.render('pages/about')
})
app.get("/contato", function(request, response){
    response.render('pages/contact')
})
app.listen(8080)
console.log('Server is running');