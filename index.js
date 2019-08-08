/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-recurly-service',
  contentFor: function(type) {
    if (type === 'body') {
      return '<script src="https://js.recurly.com/v4/recurly.js"></script>';
    }
  }
};
