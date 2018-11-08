// Require ALL dependencies --- did you forget any?? check package.json --
/* Though var is perfectly accepable, lets update to the latest ES6 syntax!
var to const */
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser'); // FIX #1 - add bodyParser dependency

const PORT = process.env.PORT || 5000; // set global var for port

// ---- Middleware, The order of Middleare is IMPORTANT!! --------
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: false })); // FIX #2 - missing semi-colon;
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'public'))); // FIX #3 - missing closing paren

app.get('/favorites', function(req, res) {
  var data = fs.readFileSync('./data.json');
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
}); // FIX #4 - missing closing curly brace and closing paren;

// FIX #5 - POST request not GET
app.post('favorites', function(req, res) {
  if (!req.body.Title || !req.body.imdbID) {
    // FIX #10 - change to Title and imdbID as valid keys
    // FIX #6 - come back to fix 'oid'
    res.send('Error');
    return;
  } // FIX #7 - missing closing curly brace from if statement
  var data = JSON.parse(fs.readFileSync('./data.json'));
  data.push(req.body);
  fs.writeFile('./data.json', JSON.stringify(data));
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

// FIX #8 - use a global variable for PORT and use template literals
app.listen(PORT, function() {
  // FIX #9 - replace list with "listen"
  console.log(`Listening on port ${PORT}`); // can only use template literals with backticks
});
