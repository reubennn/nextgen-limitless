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
         * NOT SAFE - COMMENT OUT FOR FINAL PRODUCTION BUILD
         * Copy process.env config secrets
         *  - Used to test serving static files on server
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
                to: path.join(__dirname, "../server/src/dist/"),
            }],
        }),
    ],
});
