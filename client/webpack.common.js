const path = require("path");
const webpack = require("webpack");

module.exports = { // ES5 syntax
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                // Load & Transpile ES6 syntax for .js and .jsx files
                test: /\.(js|jsx)$/, // Regular expression
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env", "@babel/react"],
                    plugins: [
                        [
                            "babel-plugin-styled-components",
                            { displayName: true }
                        ],
                        "@babel/plugin-proposal-class-properties"
                    ],
                },
            },
            {
                // Load & Compile SCSS and SASS files to CSS
                test: /\.s(a|c)ss$/i, // "/i => case insensitive"
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                // Load & Transpile CSS
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ],
            },
        ],
    },
    resolve: {
        extensions: [
            "*",
            ".js",
            ".jsx",
        ],
        // Replace react-dom with @hot-loader/react-dom
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
    },
};
