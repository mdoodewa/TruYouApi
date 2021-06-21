const TruYouRoutes = require('./api/routes/TruYouRoutes');

var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

app.listen(port);

console.log('TruYou RESTful API server started on port: '+port);

app.use('/api', TruYouRoutes);

app.all('*', (req, res, next) => {
    console.log('Endpoint not found.')

    const errorObject = {
      message: 'Endpoint does not exist!',
      code: 404,
      date: new Date()
    }
    next(errorObject);
});

app.use((error, req, res, next) => {
    console.warn('Error handler: ', error.message.toString());
    res.status(error.code).json(error)
  })

module.exports = app;