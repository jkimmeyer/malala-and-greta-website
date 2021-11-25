const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
  ],
  rules: {
    'import/prefer-default-export': 'off', // Prefer named exports where possible
  },
  settings: {
    'import/resolver': {
      alias: [
        ['@', path.join(__dirname, 'app/javascript')
        ],
      ],
      node: {
        paths: ['app/javascript'
        ],
        extensions: ['.js'
        ],
      },
    },
  },
};
