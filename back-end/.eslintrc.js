module.exports = {
  "extends": "airbnb-base",
  'rules': {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'import/no-named-as-default': 0,
    'linebreak-style': 0,
    'function-paren-newline': ['error', 'consistent'],
    'object-curly-newline': ['error', { 'consistent': true }],
    'class-methods-use-this': 'warn',
    "prefer-destructuring": ["error", {"object": false, "array": false}]
  },
  'env': {
    'browser': true,
    'node': true
  }
};