/*
mkdir my-app
cd my-app
npm init
npm i body-parser
npm i express
# edit package.json and add ', "start": "node app.js"' to scripts section
npm start
http://localhost:3000/
*/

const express = require('express');
var bodyParser = require('body-parser')
const app = express();
  
var urlencodedParser = bodyParser.urlencoded({ extended: false })
    
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/processform', (req, res) => {
  console.log('Got GET:', req.query);
  const fullname = req.query.fullname;
  res.send( "fullname is " + fullname);
  res.sendStatus(200);
});    

app.post('/processform', urlencodedParser, (req, res) => {
  console.log('Got POST:', req.body);
  const fullname = req.body.fullname;
  res.send( "<html><body><h1>" + fullname ); 
  res.sendStatus(200);
});
  
app.listen(3000);