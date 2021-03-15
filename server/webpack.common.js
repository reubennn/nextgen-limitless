const path = require("path");
const webpack = require("webpack");

module.exports = {
    module: {
        rules: [
            {
                /** Load & Transpile ES6 syntax for .js and .jsx files */
                test: /\.(js|jsx)$/i, // Regular expression
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    "presets": [
                        [
                            "@babel/preset-env",
                            {
                                "targets": {
                                    "node": "current",
                                },
                            },
                        ],
                        "@babel/preset-react",
                    ],
                    "plugins": [
                        "@babel/plugin-transform-runtime",
                        [
                            "babel-plugin-styled-components",
                            { "displayName": true },
                        ],
                        "@babel/plugin-proposal-class-properties",
                    ],
                },
            },
            {
                /** Load & Compile SCSS and SASS files to CSS */
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
                /** Load & Transpile CSS */
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                ],
            },
            {
                /** Load Files */
                test: /\.(png|jpg|jfif|gif|svg|eot|ttf|woff|woff2|json|xml|ico)$/i,
                loader: "file-loader",
                options: {
                    name: "[path][name].[ext]",
                    publicPath: "/",
                },
            },
        ],
    },
    resolve: {
        extensions: [
            "*",
            ".js",
            ".jsx",
        ],
        alias: {
            /** Directory alias to shorten import directories */
            ".../assets": path.resolve(__dirname, "./public/assets"),
            ".../images": path.resolve(__dirname, "./public/assets/images"),
        },
    },
};
