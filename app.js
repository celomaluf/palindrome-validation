var express = require('express')
    ,bodyParser = require('body-parser')
    ,path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.render('index.html');
});

app.post('/verify-palindrome', function(req, res) {
    var input = req.body.payload.toString();

    /* remove non letters*/
    var value = input.replace(/[_\W]+/g, "").toLowerCase();

    /* reverse string */
    var reversed = value.split("").reverse().join("");

    if ( value != reversed) {
        res.status(400).send();
        return;
    }
    res.send();
});

var server = app.listen(3000, function(){
    console.log('Listen on port: 3000');
});

module.exports = server;
