var express = require("express");/* npm install express */
var csv = require('csv-express')/* npm install csv-express*/

const port = process.env.PORT || 3000

var fetch_result = "";

const fs = require('fs')

var app = express();

var jokeList ="";

var categories = "Any";

const { Parser } = require('json2csv');

const fields = ['blague', 'categorie', 'emoji'];
 
app.get('/', function (req, res) {
	categories = "Any";
	correctMsg2(categories);
	res.json(fetch_result);
    res.send('Hello World!')
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
	
	categories = "Any";
	correctMsg2(categories);
	res.format({
        'application/json': function () {
		res.json(fetch_result);
        },
		'application/csv': function () {
		const json2csvParser = new Parser({ fields, delimiter: ';' });
		const csv = json2csvParser.parse(fetch_result);
		res.send(Buffer.from(csv));
		}
	});
});

app.get('/joke/:categories', function(req,resp) {
	
	categories = req.params.categories;
	//**********************************
	var unirest = require("unirest");
console.log(categories);
var req = unirest("GET", "https://jokeapi.p.rapidapi.com/category/"+categories);

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

		req2.end(function (res3) {
			if (res3.error) throw new Error(res3.error);
			var analyse = res3.body;
			analyse=JSON.parse(analyse);
			//console.log(analyse);
			var emo ="";
			if (analyse["pos_percent"] != "0%" )
					emo = emo+" :) "; // &#x1F600;

			if (analyse["mid_percent"] != "0%")
					emo = emo+ " :| "; //&#x1F914;

			if (analyse["neg_percent"] != "0%")
					emo = emo+ " :( "; //&#x1F61F;
			var result = JSON.stringify({blague : blague_text, categorie :blague["category"], emoji : emo });
			fetch_result = JSON.parse(result);
					resp.format({
					'application/json': function () {
					resp.json(fetch_result);
					},
					'application/csv': function () {
					const json2csvParser = new Parser({ fields, delimiter: ';' });
					const csv = json2csvParser.parse(fetch_result);
					resp.send(Buffer.from(csv));
					}
	});
		});
});
	
	//**************************************************

});

				
app.get('/blague', function(req,res) {
	categories = "Any";
	correctMsg2(categories);
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
	
function correctMsg2(categories) {
var unirest = require("unirest");
console.log(categories);
var req = unirest("GET", "https://jokeapi.p.rapidapi.com/category/"+categories);

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
					emo = emo+" :) "; // &#x1F600;

			if (analyse["mid_percent"] != "0%")
					emo = emo+ " :| "; //&#x1F914;

			if (analyse["neg_percent"] != "0%")
					emo = emo+ " :( "; //&#x1F61F;
			var result = JSON.stringify({blague : blague_text, categorie :blague["category"], emoji : emo });
			fetch_result = JSON.parse(result);
		});
});
return (2);

}

app.listen(port, function () {
	correctMsg2(categories);
    console.log('Example app listening on '+ port)
  });