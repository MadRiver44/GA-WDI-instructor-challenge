/* Require ALL dependencies --- did you forget any?? check package.json --
Though var is perfectly accepable, lets update to the latest ES6 syntax!
var to const */
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser'); // FIX #1 - add bodyParser dependency

const PORT = process.env.PORT || 5000;

// ---- Middleware, The order of Middleare is IMPORTANT!! --------
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: false })); // FIX #2 - missing semi-colon;
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'public'))); // FIX #3 - missing closing paren

// ---- CONDITIONAL EXPRESSION TO DETERMINE WHERE FILES ARE SERVED -----
//https://facebook.github.io/create-react-app/docs/deployment
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// ----- HTTP Methods ---------------------------
// FIX #4 - missing closing curly brace and closing paren;
app.get('/favorites', function(req, res) {
  var data = fs.readFileSync('./data.json');
  console.log(res);
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

//FIX #5 - POST request not GET
//FIX #6 - come back to fix 'oid'
//FIX #10 - change to Title and imdbID as valid keys
//FIX #11 - add callback for .writeFile()
//https://nodejs.org/docs/latest-v10.x/api/fs.html#fs_fs_writefile_file_data_options_callback
app.post('/favorites', function(req, res) {
  if (!req.body.Title || !req.body.imdbID) {
    res.send('Error');
    return;
  }
  // FIX #7 - missing closing curly brace from if statement
  var data = JSON.parse(fs.readFileSync('./data.json'));
  data.push(req.body);
  fs.writeFile('./data.json', JSON.stringify(data), err => {
    if (err) {
      throw err;
    } else {
      console.log('The file has been saved');
    }
  });
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

// FIX #8 - use a global variable for PORT and use template literals
// FIX #9 - replace list with "listen"
// use template literals!!
app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});
