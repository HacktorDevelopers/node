var express = require('express');
var indexRoute = require('./routes/indexRoute');
var databaseRoute = require('./routes/databaseRoute');
app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

indexRoute(app);
databaseRoute(app);

app.listen(3000);