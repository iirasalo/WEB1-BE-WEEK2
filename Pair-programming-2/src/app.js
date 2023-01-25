const express = require('express');
const app = express();
const PORT = 5000;
//load the quotes JSON
const quotes = require('./anecdotes.json');

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /anecdotes            - Should return all anecdotes (json)
//   /anecdotes/random     - Should return ONE anecdote (json)
app.get('/anecdotes', function (request, response) {
  response.send(quotes);
});

app.delete('/anecdotes/:id', (request, response) => {
  response.send('With this endpoint you can delete anecdotes');
});

app.post('/anecdotes', (request, response) => {
  response.send('With this you can add anecdotes');
});

app.get('/one', function (request, response) {
  response.send('You asked for route /one');
});

app.get('/two', function (request, response) {
  response.send('You asked for route /two');
});

//START OF YOUR CODE...

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

app.get('/anecdotes/random', function (request, response) {
  response.send(pickFromArray(quotes));
});

// create .env file, also install dotenv, and require in the app

//Start our server so that it listens for HTTP requests!
const listener = app.listen(PORT, function () {
  console.log('Server is listening on port ' + PORT);
});
