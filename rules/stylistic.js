'use strict';

module.exports = {
  rules: {
    'jsx-quotes': [2, 'prefer-double'],
    // specify the maximum length of a line in your program
    'max-len': [2, 120, 2],
    // 2 spaces for indent
    indent: [2, 2],
    // single quotes
    quotes: [2, 'single'],
    // unix breaks
    'linebreak-style': [2, 'unix'],
    // use semi colons
    semi: [2, 'always'],
    // make sure there is at least one space after colon
    'key-spacing': [2,
      {
        beforeColon: false,
        afterColon: true,
        mode: 'minimum'
      }],
    // no else { if { }}, use else if { } instead
    'no-lonely-if': 2,
    // no spaces for props: abc['one']
    'computed-property-spacing': [2, 'never'],
    // new person() is not allowed.
    'new-cap': [2, { properties: false }],
    // no spaces in brackets
    'array-bracket-spacing': [2, 'never'],
    // no spaces inside of parentheses
    'space-in-parens': [2, 'never'],
    // no multi spaces
    'no-multi-spaces': 2,
    'block-spacing': [2, 'always'],
    'brace-style': 2,
    'eol-last': 2,
    'keyword-spacing': 2,
    'no-multiple-empty-lines': [2, { 'max': 2, 'maxEOF': 1 }],
    'no-nested-ternary': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never'],
    'no-unneeded-ternary': 2,
    'object-curly-spacing': [2, 'always'],
  }
};
