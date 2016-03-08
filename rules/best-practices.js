'use strict';

module.exports = {
  extends: [
    'eslint:recommended'
  ],
  rules: {
    // require the use of === and !==
    eqeqeq: [2, 'smart'],
    // add a comma, don't add it, its groovy baby
    'comma-dangle': 0,
    // disallow unnecessary function binding
    'no-extra-bind': 2,
    // disallow usage of configurable warning terms in comments - e.g. TODO or FIXME
    'no-warning-comments': 2,
    // no need for else when if has a return statement
    'no-else-return': 2,
    // always put a dot next to property, instead of object for new lines
    'dot-location': [2, 'property'],
    // do not assign in return statement
    'no-return-assign': 2,
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 2,
    // do not allow useless .call and .apply
    'no-useless-call': 2,
    // disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 2,
    // variables should come first
    'yoda': 2,
  },
};
