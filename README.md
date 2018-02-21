# express-app
1. Create a repository called `express-app` in GitHub, use this name specifically. Not some other variation.
- - -
2. Follow the directions found here: http://expressjs.com/en/starter/hello-world.html

## Hello world example

This app starts a server and listens on port 3000 for connections. The app responds with *“Hello World!”* for requests to the root URL (/) or route. For every other path, it will respond with a **404 Not Found**.

The example above is actually a working server: Go ahead and click on the URL shown.

You’ll get a response, with real-time logs on the page, and any changes you make will be reflected in real time. This is powered by RunKit, which provides an interactive JavaScript playground connected to a complete Node environment that runs in your web browser.

Below are instructions for running the same app on your local machine.

1. First create a directory named myapp, change to it and run npm init. Then install express as a dependency, as per the installation guide.

    * In the myapp directory, create a file named app.js and copy in the code from the example above.

2. Run the app with the following command: `$ node app.js`

### Running Locally
First create a directory named `myapp`, change to it and run npm init. Then install express as a dependency, as per the installation guide.

In the myapp directory, create a file named `app.js` and copy in the code from the example above.

```
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
```

Run the app with the following command:
```
$ node app.js
```
Then, load http://localhost:3000/ in a browser to see the output.

- - -
3. Follow the directions found here: http://expressjs.com/en/starter/basic-routing.html

## Basic routing

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific `HTTP` request method (`GET`, `POST`, and so on).
* Each route can have one or more handler functions, which are executed when the route is matched.

Route definition takes the following structure:
```
app.METHOD(PATH, HANDLER)
```

Where:
* app is an instance of express.
* METHOD is an HTTP request method, in lowercase.
* PATH is a path on the server.
* HANDLER is the function executed when the route is matched.

The following examples illustrate defining simple routes.
* Respond with Hello World! on the homepage:
```
app.get('/', function (req, res) {
  res.send('Hello World!')
})
```
* Respond to `POST` request on the root route (/), the application’s home page:
```
app.post('/', function (req, res) {
  res.send('Got a POST request')
})
```
* Respond to a `PUT` request to the /user route:
```
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})
```
* Respond to a `DELETE` request to the /user route:
```
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})
```
- - -
The final code should be a combination of both #2 and #3 - meaning you'll need to set up the basic server as described in #1 and update that code with the routes described in #3.