
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var path         = require('path');


//app.use(express.bodyParser());
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../webclient')));

app.get('/', function (req, res) {
  
  res.render('index.html');
  //res.send('Hello World');
  
  console.log('get message');
});

app.get('/api/shop/electronicShop', function (req, res) {
  res.json(
    { 
      shop:
        { name: 'electronicShop',
          products: [
            {
              name: 'samsung tv'
            },
            {
              name: 'sound system'
            },
            {
              name: 'smartphone'
            },
            {
              name: 'stove'
            }
            
          ]} 
    }
    );
  
  
  
  console.log('got message');
});

app.post('/push2', function(req, res) {
  res.send(req.body.title);
  
  console.log("ack: " + req.body.title);
  
});


app.listen(3000);