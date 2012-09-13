var path = require('path');
//
// Simple plugin to load other plugins via config.get('plugins')
//
exports.name = 'pluggable';

exports.attach = function (options) {
   this.pluggable = {};
   //
   // Grab all of our plugins to load
   //
   var dir = this.config.get('directories:plugins');
   loadPlugins.call(this, 'plugins', options.fetch || function (pluginPath) {
      return require(path.resolve(process.cwd(), dir, pluginPath));
   });
}

function loadPlugins(plugins, fetch) {
   //
   // Figure out the type (may vary due to things like optimist's argv)
   // .use it and any value attached to it
   //
   var app = this;
   if (Array.isArray(plugins)) {
      plugins.forEach(function(pluginPath) {
         app.use(fetch(pluginPath));
      });
   }
   else if (typeof plugins === 'string') {
      app.use(fetch(plugins));
   }
   else if (typeof plugins === 'object') {
      Object.keys(plugins).forEach(function (pluginPath) {
         app.use(fetch(pluginPath), plugins[pluginPath]);
      });
   }
}
