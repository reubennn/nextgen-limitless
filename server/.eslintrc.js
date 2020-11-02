module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true,
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
            impliedStrict: true,
            jsx: true,
        },
        sourceType: "module",
    },
    extends: [
        /** Note: order is important; last taking precedence */
        "eslint:recommended",
        "prettier",
        "google",
    ],
    rules: {
        /** Prettier function formatting */
        "space-before-function-paren": ["off"],
        "object-curly-spacing": [2, "always"],
        "indent": [
            "error",
            4,
            {
                SwitchCase: 1,
                ObjectExpression: "off",
            },
        ],
        "linebreak-style": 0,
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        /** Stop Express Router cap error */
        "new-cap": 0,
    },
};
