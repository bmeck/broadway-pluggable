var flatiron = require('flatiron');
var app = flatiron.app;

app.config.set('log:logAll', true);
app.config.set('directories:plugins', __dirname);
app.config.set('plugins:plugin', {hello:'world!'});
app.use(require('../'));
app.init();
