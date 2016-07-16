import * as express from 'express';
import * as http from 'http';

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
