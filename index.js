'use strict';

module.exports = function (string) {
  return encodeURIComponent(string).replace(/[!'()*]/g, function (x) {
    return '%' + x.charCodeAt(0).toString(16).toUpperCase();
  });
};
