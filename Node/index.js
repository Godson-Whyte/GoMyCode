const express = require('express')
const port = 4000

const app = express()

app.get('/', function(req,res){
    res.send('Get request to the homepage')
}).post('/', function(req,res){
    res.send('Get request to the Homepage')
}).all('/secret', function(req,res, next){
    console.log('Accessing the secret section ...');
    next()
}).use(function(req, res, next){
    res.status(404).send('Page introvable!')
})

// app.get('/', function(req,res){
//     res.end('Hello World')
// })

// app.get('/name/:user_name', function(req,res) {
//     res.status(200);
//     res.set('content-type', 'text/html');
//     res.send(`<html><body>
//         <h1>Hello ${req.params.user_name}!</h1>
//         </body></html>`)
// })

app.listen(port, function(){
    console.log(`The server is running, please open your browser at http://localhost:${port}`);
})

