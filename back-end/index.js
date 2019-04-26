const app = require('./src/config/server');

// starting the server
app.listen(app.get('port'), () => {
  console.log('Server is running on port', app.get('port'));
});
