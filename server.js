let express = require('express');
let logger = require('./services/logger');

let app = express();



app.get('/', (request, response) => {
  logger.log('new access to the api root');
  response.send('Welcome to the API');
});

app.listen(3000, ()=>{
console.log('server is listening on port 3000');

});
