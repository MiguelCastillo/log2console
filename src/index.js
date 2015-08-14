var type = require('dis-isa');

var _transform = (function getTransform() {
  if (typeof(process) === 'undefined') {
    return function(data) {
      if (type.isPlainObject(data)) {
        return JSON.stringify(data);
      }
      return data;
    };
  }
  else {
    return function(data) {
      return data;
    };
  }
})();

var _console = (function getConsole() {
  if (typeof(console) === 'undefined') {
    return {
      log: function() {},
      error: function() {}
    };
  }
  else {
    return console;
  }
})();

function _setHandled(data) {
  try {data.handled = true;} catch(ex) {}
}

/**
 * Logs error to the console and makes sure it is only logged once.
 */
function log(data) {
  if (type.isError(data)) {
    if (!data.handled) {
      _setHandled(data);
      _console.error(data);
    }
  }
  else {
    _console.log(_transform(data));
  }
  return data;
}


module.exports = {
  log: log
};
