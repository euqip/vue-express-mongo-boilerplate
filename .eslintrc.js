module.exports = {
    root: true,
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jquery": true,
        "mocha": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "plugins": [
        "html"
    ],
    "rules": {
        "indent": [
            "warn",
            2
        ],
        "quotes": [
            "warn",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-var": [
            "error"
        ],
        "no-console": [
            "off"
        ],
        "no-unused-vars": [
            "off"
        ],
        "no-mixed-spaces-and-tabs": [
            "warn"
        ]
    }
};