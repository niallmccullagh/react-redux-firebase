module.exports = {
    'parser': 'babel-eslint',
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      'max-len': ['error', 120, 2, {
          ignoreUrls: true,
          ignoreComments: false
      }]
    }
};
