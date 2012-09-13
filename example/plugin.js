exports.name = 'example-plugin';
exports.attach = function (options) {
   console.error(options)
}
exports.detach = function () {}