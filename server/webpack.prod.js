const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: "/public/",
        filename: "bundle.js",
    },
    plugins: [
        /** Ignore the react-hot-loader dependency */
        new webpack.IgnorePlugin(/react-hot-loader/),
    ],
});
