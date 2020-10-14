const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { merge } = require("webpack-merge");
const common = require('./webpack.common.js');

module.exports = merge(common, { // ES5 syntax
    output: {
        path: path.resolve(__dirname, "../server/src/dist/"),
        publicPath: "/dist/",
        filename: "bundle.js",
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: path.join(__dirname, "public/"),
                to: path.join(__dirname, "../server/src/dist/")
            }],
        }),
    ],
});
