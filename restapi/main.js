const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
const ejs = require('ejs');
const app = express();

var server = app.listen(3001,function(){
    console.log('3001 포트 에서 실행대따');
})

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var router = require('./router/router')(app,fs);