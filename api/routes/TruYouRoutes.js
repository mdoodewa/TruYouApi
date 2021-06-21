module.exports = function(app){
    var TruYouController = require('../controllers/TruYouController');

    app.route('/streamdata')
    .put(TruYouController.update_stream_data);

    app.route('/')
    .get(TruYouController.get)

}