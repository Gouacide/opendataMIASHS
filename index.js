var express = require("express");/* npm install express */
var csv = require('csv-express')/* npm install csv-express*/

const port = process.env.PORT || 3000

var fetch_result = "";

const fs = require('fs')

var app = express();

var jokeList ="";

const { Parser } = require('json2csv');

const fields = ['blague', 'categorie', 'emoji'];
 
app.get('/', function (req, res) {
	correctMsg2();
	res.json(fetch_result);
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
app.get('/joke', function(req,res) {
	correctMsg2();
	res.format({
        'application/json': function () {
		res.json(fetch_result);
        },
		'application/csv': function () {
		const json2csvParser = new Parser({ fields, delimiter: ';' });
		const csv = json2csvParser.parse(jokeList);
	 
		//console.log(csv);
		res.send(Buffer.from(csv));
		}
	});
});
		
		
app.get('/blague', function(req,res) {
	correctMsg2();
	res.format({
        'application/json': function () {
		jokeList = '['+jokeList+']'
		res.json(jokeList);
        },

        'application/csv': function () {
		jokeList = '['+jokeList+']'
		const json2csvParser = new Parser({ fields, delimiter: ';' });
		const csv = json2csvParser.parse(jokeList);
	 
		console.log(csv);
		res.send(Buffer.from(csv));
        }
    })
})
app.get('/test', function(req,res){
	function increment(){
		console.log(jokeList);
		jokeList = jokeList+','+fetch_result;
	}
});
  
const fetch = require("node-fetch");
	
function correctMsg2() {
var unirest = require("unirest");

var req = unirest("GET", "https://jokeapi.p.rapidapi.com/category/Any");

req.query({
	"format": "json"
});

req.headers({
	"x-rapidapi-host": "jokeapi.p.rapidapi.com",
	"x-rapidapi-key": "Ez1zks3VaVmshNkRNA6CstvAj9ucp18lEoHjsnq0tTha5zioix"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);
	var blague = res.body;
	var blague_text = "";
	console.log(blague);
	if (blague["setup"]){blague_text= blague["setup"];
	blague_text= blague_text+blague["delivery"]
	}
	else
		blague_text=blague["joke"];
	//console.log(blague_text);
		
		var unirest2 = require("unirest");

		var req2 = unirest2("POST", "https://text-sentiment.p.rapidapi.com/analyze");

		req2.headers({
			"x-rapidapi-host": "text-sentiment.p.rapidapi.com",
			"x-rapidapi-key": "Ez1zks3VaVmshNkRNA6CstvAj9ucp18lEoHjsnq0tTha5zioix",
			"content-type": "application/x-www-form-urlencoded"
		});

		req2.form({
			"text": blague_text
		});

		req2.end(function (res) {
			if (res.error) throw new Error(res.error);
			var analyse = res.body;
			analyse=JSON.parse(analyse);
			//console.log(analyse);
			var emo ="";
			if (analyse["pos_percent"] != "0%" )
					emo = emo+" &#x1F600;";

			if (analyse["mid_percent"] != "0%")
					emo = emo+ " &#x1F914;";

			if (analyse["neg_percent"] != "0%")
					emo = emo+ " &#x1F61F;";
			var result = JSON.stringify({blague : blague_text, categorie :blague["category"], emoji : emo });
			fetch_result = JSON.parse(result);
		});
});
return (2);

}
app.listen(port, function () {
	correctMsg2();
    console.log('Example app listening on '+ port)
  });