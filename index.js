module.exports = function pairs(obj) {
  var all = [];

  (function _pairs(obj, p) {
    if (typeof obj === 'string') {
      return;
    }
    for (var k in obj) {
      if (p !== null && !Array.isArray(obj)) {
        all.push(['child', p, k]);
      }
      if (typeof obj[k] === 'object') {
        _pairs(obj[k], (Array.isArray(obj) ? p : k));
      } else if (p !== null) {
        if (Array.isArray(obj)) {
          all.push(['inarray', p, obj[k]]);
        } else {
          all.push(['value', k, obj[k]]);
        }
      }
    }
  })(obj);

  return all;
};
