let express = require('express');
let logger = require('./services/logger');
let bodyParser = require('body-parser');
let users= require('./data/users.json');

let app = express();
//console.log(db[0].email);
// console.log(db);



app.use(bodyParser.urlencoded({ extended: false }));

app.use('*',(request,response,next)=>{
  logger.info(`access to the ${request.originalUrl} rout`);
  next();
});

app.get('/', (request, response) => {
  response.send('Welcome to the API');
});

 app.post('/log',(request, response)=>{
// let message = request.body.message;
//  logger.log(message);
logger.info(request.body.message);
 response.send('new log stored successfully!');
 });

app.post('/signin',(request, response)=>{
    let username = request.body.username,
        password = request.body.password;

    console.log(username);
    console.log(password);

    users.forEach((user)=>{
      if(user.username== username && user.password ==password){
      response.json({
        isAuthenticated : true
      });
        return;
      }
    });
    response.json({
      isAuthenticated :false
    });

});

app.post('/signup', (request,response)=>{
  let email = request.body.email,
      username = request.body.username,
      password = request.body.password,
      favoriteMovies = request.body.favoriteMovies;

    users.push({
      email : email,
      username : username,
      password : password,
      favoriteMovies : favoriteMovies.split(',')
    });

    console.log(users);
    response.json({
      message : 'register is completed'
    });
});


app.get('/users',(request,response)=>{
   response.json(users);
});


app.get('/users/:email',(request,response)=>{

  let email = request.params.email;

  users.forEach((user)=>{
    if(user.email== email){
    response.json(user)
      return;
    }
  });
});

app.get('/users/:email/movies', ( request, response ) => {
  let email = request.params.email;
  users.forEach(( user ) => {
    if (user.email == email) {
      response.json(user.favoriteMovies);
    }
  });
});

// app.get('/movie/:title', ( request, response ) => {
//   let title = request.params.title;
//   http.get('http://www.omdbapi.com/?t=' + title + '&apikey=BanMePlz', (res) => {
//     res.on('data', (chunk) => {

//       console.log(chunk);

//     });
//   });
// })

app.listen(3000, ()=>{
console.log('server is listening on port 3000');

});
