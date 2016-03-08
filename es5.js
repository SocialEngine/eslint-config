'use strict';

module.exports = {
  extends: [
    'socialengine/rules/best-practices',
    'socialengine/rules/stylistic',
  ],
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false
    },
  }
};
