const server = require('./config/server');
require('./config/database');

//Section 4-36 - 5:00min
require('./config/routes')(server);