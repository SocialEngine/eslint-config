# eslint-config-socialengine

[![](http://img.shields.io/npm/v/eslint-config-socialengine.svg)](https://npmjs.org/package/eslint-config-socialengine)
[![](https://api.travis-ci.org/SocialEngine/eslint-config.svg?branch=master)](https://travis-ci.org/SocialEngine/eslint-config)

A composable set of ESLint configurations used by [SocialEngine](https://www.socialengine.com) to unify code style and 
linting rules.

***

## Installation

Install this config package and ESLint:

```bash
$ npm install --save-dev eslint eslint-config-socialengine eslint@~2.2.0
```

## Usage

### Full Configurations

This package includes the following complete and ready to use configurations:

- `es5-node` - ES5 style node-optimized config
- `es5-react` - ES5 (old school) style react-optimized config
- `es5` - Plain old ES5
- `es6-react` - `babel-eslint` powered es6 react-optimized config

###### Dependencies

- Any React config (`<prefix>-react`) - [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- Any ES6 config (`es6-<suffix>`) - [babel-eslint](https://github.com/babel/babel-eslint)

To consume and extend a config in ESLint just add the extends attribute to your `.eslintrc`. For
more details about how shareable configs work, see the
[ESLint documentation](http://eslint.org/docs/developer-guide/shareable-configs).

```json
{
  "extends": [
    "socialengine/es5-node"
  ] 
}
```

Multiple is allowed:
```json
{
  "extends": [
    "socialengine/es5-node",
    "socialengine/rules/mocha"
  ] 
}
```

**NOTE:** Extending multiple complete configs can cause unexpected results, if you need to do this you should consider a piecemeal config as explained below.

### Piecemeal Configurations

ESLint configuration is broken apart in `./rules` containing ESLint's rules and rules for specific ESLint plugins. The full set of ESLint rules (`./rules/`) are broken into categories that mirror ESLint's documentation.

###### Examples

```json
{
  "extends": [
    "socialengine/rules/best-practicies",
    "socialengine/rules/mocha"
  ],
  "rules": {},
  "env": {
    "phantomjs": true
  }
}
```

## Limitations

Due to an issue with ESLint, config extension cannot be called from a globally installed (`npm install -g eslint`) eslint. It can however be run properly using eslint installed directly to your package's `node_modules`. This can be done by either calling it directly (`./node_modules/.bin/eslint .`) or from within an npm script since they automatically check local `node_modules` first. 

### This package tracks config in the following versions:

- [ESLint](https://github.com/eslint/eslint) 2.2.0
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) 4.2.0

## License

[MIT License](http://opensource.org/licenses/MIT)
