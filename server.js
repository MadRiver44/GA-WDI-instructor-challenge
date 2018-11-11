// // Require ALL dependencies --- did you forget any?? check package.json --
// /* Though var is perfectly accepable, lets update to the latest ES6 syntax!
// var to const */
// const express = require('express');
// const app = express();
// const fs = require('fs');
// const path = require('path');
// const bodyParser = require('body-parser'); // FIX #1 - add bodyParser dependency

// const PORT = process.env.PORT || 3001; // set global var for port

// // ---- CONDITIONAL EXPRESSION TO DETERMINE WHERE FILES ARE SERVED -----

// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, 'client/build')));
//   // Handle React routing, return all requests to React app
//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// }

// // ---- Middleware, The order of Middleare is IMPORTANT!! --------
// app.use(express.static(path.join(__dirname, '/public')));
// app.use(bodyParser.urlencoded({ extended: false })); // FIX #2 - missing semi-colon;
// app.use(bodyParser.json());
// app.use('/', express.static(path.join(__dirname, 'public'))); // FIX #3 - missing closing paren

// // ----- HTTP Methods ---------------------------
// app.get('/favorites', function(req, res) {
//   var data = fs.readFileSync('./data.json');
//   console.log(req.body);
//   res.setHeader('Content-Type', 'application/json');
//   res.send(data);
// }); // FIX #4 - missing closing curly brace and closing paren;

// //FIX #5 - POST request not GET
// app.post('/favorites', function(req, res) {
//   console.log(req.body);
//   if (!req.body.Title || !req.body.imdbID) {
//     // FIX #10 - change to Title and imdbID as valid keys
//     // FIX #6 - come back to fix 'oid'
//     res.send('Error');
//     return;
//   } // FIX #7 - missing closing curly brace from if statement
//   var data = JSON.parse(fs.readFileSync('./data.json'));
//   data.push(req.body);
//   fs.writeFile('./data.json', JSON.stringify(data), err => {
//     if (err) {
//       throw err;
//     } else {
//       console.log('The file has been saved');
//     }
//   });
//   res.setHeader('Content-Type', 'application/json');
//   res.send(data);
// });

// // FIX #8 - use a global variable for PORT and use template literals
// app.listen(PORT, function() {
//   // FIX #9 - replace list with "listen"
//   console.log(`Listening on port ${PORT}`); // can only use template literals with backticks
// });

var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
} else {
  app.use('/', express.static(path.join(__dirname, 'public')));
}

// GET /favorites
// GETS the information from our servcer (data.json)
app.get('/favorites', function(req, res) {
  var data = fs.readFileSync('./data.json');
  console.log(res);
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

// POST to /favorites
// POST information to our server (data.json)
app.post('/favorites', function(req, res) {
  if (!req.body.Title || !req.body.imdbID) {
    res.send('Error');
    return;
  }

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

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
