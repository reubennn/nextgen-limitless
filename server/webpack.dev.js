/** dotenv config setup for loading secret environment variables */
const Dotenv = require("dotenv-webpack");
const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    /** Fix DevTools SourceMapping load failures */
    devtool: "eval-source-map",
    output: {
        /** webpack-dev-server bundles the file in-memory */
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/",
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: process.env.DEV_PORT || 5000,
        publicPath: "/",
        hotOnly: true,
    },
    plugins: [
        /** Enable hot loading for react-hot-loader */
        new webpack.HotModuleReplacementPlugin(),
        /** Define dotenv plugin for process.env */
        new Dotenv({
            path: path.join(__dirname, "config/secrets.env"),
        }),
    ],
});
