module.exports = {
  'env': {
    'browser': true,
    'commonjs': true
  },
  'extends': ['eslint:recommended', 'plugin:react/recommended'],
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'modules': true,
      'experimentalObjectRestSpread': true
    }
  },
  'plugins': ['react'],
  'rules': {
    'indent': [
      'error', 2
    ],
    'linebreak-style': [
      'error', 'unix'
    ],
    'quotes': [
      'error', 'single'
    ],
    'semi': ['error', 'never']
  },
  'globals': {
    '__dirname': true
  }
}
