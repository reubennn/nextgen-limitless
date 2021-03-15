const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const ENTRY = {
    /** Bundle for development purposes */
    "public": "./src/index.js",
    /** Bundle for distribution */
    "dist/public": "./src/index.js",
};

module.exports = merge(common, {
    mode: "production",
    entry: ENTRY,
    output: {
        path: path.resolve(__dirname, "./"),
        publicPath: "/assets/",
        filename: "[name]/bundle.js",
    },
    plugins: [
        /** Ignore the react-hot-loader dependency */
        new webpack.IgnorePlugin(/react-hot-loader/),
        /** Copy files from public directory to dist directory */
        new CopyWebpackPlugin({
            patterns: [{
                from: path.join(__dirname, "./public"),
                to: path.join(__dirname, "./dist/public"),
            }],
        }),
    ],
});
