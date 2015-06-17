var http  =  require('http')
  	,app  = require('./config/express.js')();


http.createServer(app).listen(app.get('port'), function(){
	console.log('Server is running:%d',app.get('port'));
});