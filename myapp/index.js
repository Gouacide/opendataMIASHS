var express = require("express");/* npm install express */
var csv = require('csv-express')/* npm install csv-express*/

const fs = require('fs')

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!')
  })

app.get('/user/:name', function(req, res) {
	var age=''+req.query.age;
	if(age!=="undefined" && age.trim().length){
	res.send('Hello '  + req.params.name + ' tu as ' + age +' ans');
	}else{
	(res.send('Hello '  + req.params.name));
	}
})

app.get('/index', function(req,res) {
	fs.readFile('index.html', function(err, html) {
	if(err){throw err;}
	res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(html)
            res.end()
	})

})

app.get('/names', function(req,res) {
	res.format({
        'application/json': function () {
            res.json([{name : 'toto'}, {name : 'baptiste'}, {name : 'gabriel'}]);
        },

        'application/csv': function () {
            res.csv([{name : 'toto'}, {name : 'baptiste'}, {name : 'gabriel'}]);
        }
    })
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  });
  
  
  
const fetch = require("node-fetch");
	
function correctMsg() {

var request = require('request');
request('https://api.jikan.moe/v3/search/anime?q=naruto', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body); // Print the google web page.
  }
});
    }
	
function correctMsg2() {

var request = require('request');
request('https://cdn.animenewsnetwork.com/encyclopedia/api.xml?title=~naruto', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body); // Print the google web page.
  }
});
    }