const express = require('express');
    app = express();
    bodyParser = require('body-parser');
    path = require('path');
    port = 8000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist'));

require('./server/config/manager');
require('./server/config/routes')(app);

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});
