'use strict';

module.exports = {
  extends: [
    'socialengine/es5',
    'socialengine/rules/react',
  ],
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
  }
};
