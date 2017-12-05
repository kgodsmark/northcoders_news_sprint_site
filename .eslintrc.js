/* 
 * ESLint configuration for a basic Node project with Mocha and ES6
 */
module.exports = {
    "extends": ["eslint:recommended"],
    "env": {
        "jest": true,
        "mocha": true,
        "es6": true,
        "browser": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
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
        "space-before-blocks": "warn",
        "arrow-spacing": "warn",
        "keyword-spacing": "warn",
        "space-infix-ops": "warn",
        "space-in-parens": "warn",
        "spaced-comment": "warn",
        "semi": "warn",
        "no-multiple-empty-lines": ["error", { "max": 1 }],
        "eol-last": "error",
        "handle-callback-err": "error",
        "camelcase": 0,
        "react/prop-types": 0,
        "comma-spacing": "warn",
        "quotes": ["error", "single"],
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-console": 0,
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error"
    }
}
