// Require the express module
const express = require('express');

// Create a new instance of the express module
const app = express();

// Declare our route
// listening for a type of request called get
app.get('/:message', function(request, response, next) {
    // declare a variable that is equal to what was entered
    const { message } = request.params;
    return response.json(message);
});

// Set our port to server the application on
const port = 3000;

// Tell our instance of express to listen to request made on our port
app.listen(port, function() {
  console.log(`Listening on port: ${port}`);
});
