var express = require('express');
var app = express();

app.get('/', (request, response) => {
  response.send('Welcome to the API');
});

app.listen(3000, ()=>{
console.log('server is listening on port 3000');

});
