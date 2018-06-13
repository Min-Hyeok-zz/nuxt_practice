const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
const cors = require('cors');
// const ejs = require('ejs');
const app = express();

app.use(cors())
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.listen(8080,function(){
    console.log('8080 뽀올트');
})

require('./router/router')(app,fs);