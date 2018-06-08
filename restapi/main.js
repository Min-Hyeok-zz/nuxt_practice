const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
// const ejs = require('ejs');
const app = express();

var server = app.listen(8080,function(){
    console.log('8080 뽀올트');
})

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var router = require('./router/router')(app,fs);