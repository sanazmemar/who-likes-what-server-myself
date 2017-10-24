let winston = require('winston');
module.exports=(function(){
  winston.add(winston.transports.File, { filename: 'logs.log' });
  winston.remove(winston.transports.Console);
  return{
    log: (message)=>{
       winston.log('info', message);
    }
  }
})();
