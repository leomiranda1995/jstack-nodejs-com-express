const express = require('express');

const routes = require('./routes');

const app = express();

app.use((request, response, next) => {
  // Middlewares no Express
  request.appId = 1;
  next();
});
app.use(routes);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
