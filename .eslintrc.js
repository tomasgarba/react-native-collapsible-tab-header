module.exports = {
    "extends": [
        "airbnb",
        "plugin:flowtype/recommended"
    ],
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "react-native",
        "flowtype"
    ],
    "rules": {
        "no-underscore-dangle": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function":0,
        "react/require-default-props":0,
        "react/prefer-default-export":0,
        "no-param-reassign":0,
        "no-unused-expressions":0,
    }
};