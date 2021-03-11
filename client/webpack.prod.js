const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const dotenv = require("dotenv");

module.exports = merge(common, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "../server/src/dist/"),
        publicPath: "/dist/",
        filename: "bundle.js",
    },
    plugins: [
        /**
         * Copy .env config to the production build.
         * - We are not storing any sensitive information that should not
         * be shared with the client for our React Application.
         * - If we were, then this would not be safe.
         */
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(dotenv.config({
                path: __dirname + "/config/secrets.env",
            }).parsed),
        }),
        /** Copy files from public directory to dist directory */
        new CopyWebpackPlugin({
            patterns: [{
                from: path.join(__dirname, "public/"),
                to: path.join(__dirname, "./src/dist/"),
            }],
        }),
        /** Ignore the react-hot-loader dependency */
        new webpack.IgnorePlugin(/react-hot-loader/),
    ],
});
