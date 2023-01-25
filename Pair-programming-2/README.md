## Tasks

> Work in group to solve these tasks.

Make an anecdotes server. The server must have at least these two "routes":

- `/anecdotes` - returns ALL of the anecdotes, as JSON.
- `/anecdotes/random` - returns ONE of the anecdotes, picked differently at random each time it is requested.

A list of quotes (in JSON format) is provided in [anecdotes.json](./src/anecdotes.json). Each quote is a simple object with a quote and an author.

Here are some steps to guide you:

## Step1

Add a `/anecdotes` route to return _all_ of the anecdotes as JSON.

Note that the anecdotes have already been loaded for you from a JSON file in [app.js](./src/app.js).

Test that your server successfully serves all of the quotes as json by making a request for `/anecdotes` from your new server.

> To add a new route, you can copy-paste an existing route and change its parameters.

For example, here are two routes

```js
app.get('/one', function (request, response) {
  response.send('You asked for route /one');
});

app.get('/two', function (request, response) {
  response.send('You asked for route /two');
});
```

You can refer to this short [Basic Routing](https://expressjs.com/en/starter/basic-routing.html) document for discussion on what each part does.

## Step2

Add a `/anecdotes/random` route to return _ONE_ of the anecdotes, picked randomly on each request.

You are provided with a function `pickFromArray`, to pick randomly from an array .

Feel free to write your own function which returns one element at random from any given array, and use that!

Test that this route is working too by making a request to `/anecdotes/random` You should get one an object with an anecdote and an author.

Make sure that the previous routes `/anecdotes` and `/` are still working, too!

## Step 3

- Add [routes](https://expressjs.com/en/guide/routing.html) to `app.js` that respond to POST, PUT and DELETE methods. You can refer to [`app.METHOD`](https://expressjs.com/en/5x/api.html#app.METHOD)
  - POST response: With this endpoint you can add anecdotes.
  - PUT response: With this endpoint you can edit anecdotes.
  - DELETE response: With this endpoint you can delete anecdotes.
- Test the routes with [Postman](https://www.postman.com/downloads/)

## Step 4

- Add routes to app.js that respond to POST, PUT and DELETE methods.
  - POST response: **With this endpoint you can add anecdotes**.
  - PUT response: **With this endpoint you can edit anecdotes**.
  - DELETE response: **With this endpoint you can delete anecdotes**.
- Test the routes with Postman

## Step 5

- Add new route `anecdotes/:id` that responds to GET method. You can refer to [parameters](http://expressjs.com/en/guide/routing.html#route-parameters)
