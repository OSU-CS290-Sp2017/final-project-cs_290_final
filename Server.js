/*
 * By: Brandon Villanueva
 */

var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var trooperData = require('./TrooperData');
var app = express();
var port = process.env.PORT || 3002;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.get('/Stormtroopers', function (req, res, next) {

	var templateArgs = {
		trooper: trooperData
	};

	res.render('StormtrooperPage', templateArgs);

});

/*
app.post('/Enlist', function (req, res, next) {
	var storm = trooperData;

	if (storm) {
		if (req.body.Name && req.body.Numbers) {

			var soldier = {
				Name: req.body.Name,
				Numbers: req.body.Numbers
		};

		storm = storm || '';

		storm.push(soldier);
		fs.writeFile('trooperData.json', JSON.stringify(trooperData), function (err) {
			if (err) {
				res.status(500).send("Unable to save photo to \"database\".");
			} else {
				res.status(200).send();
			}
		});

		} else {
			res.status(400).send("Enter your name Trooper!.");
		}

	} else {
		next();
	}
});
*/

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/Home', function (req, res) {
		console.log("== Server listening on port", port);
	res.sendFile(path.join(__dirname, 'public', 'Home.html'));
});

app.get('/Enlist', function (req, res) {
		console.log("== Server listening on port", port);
	res.sendFile(path.join(__dirname, 'public', 'Enlist.html'));
});

app.get('*', function (req, res) {
		console.log("== Server listening on port", port);
	res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start the server listening on the specified port.
app.listen(port, function () {
	console.log("== Server listening on port", port);
});



