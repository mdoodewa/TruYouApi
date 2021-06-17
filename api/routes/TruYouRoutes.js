module.exports = function(app){
    var TruYouController = require('../controllers/TruYouController');

    app.route('/streamData')
    .put(TruYouController.update_stream_data);

}