'use strict';

module.exports = {
  plugins: ['react'],
  rules: {
    'react/display-name': [2, { 'ignoreTranspilerName': false }],
    'react/forbid-prop-types': 2,
    'react/jsx-boolean-value': 2,
    'react/jsx-closing-bracket-location': [2, 'after-props'],
    'react/jsx-curly-spacing': 2,
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': [1, { 'maximum': 6 }],
    'react/jsx-no-bind': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-danger': 2,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 2,
    'react/no-multi-comp': [1, { 'ignoreStateless': true }],
    'react/no-unknown-property': 1,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-extension': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': 2,
    'react/wrap-multilines': 2,
  }
};
