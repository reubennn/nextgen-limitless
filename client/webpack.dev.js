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
        port: 3000,
        publicPath: "/",
        hotOnly: true,
        /** Configuration to allow React Router to work */
        historyApiFallback: true,
        proxy: {
            "/api/**": {
                target: "http://localhost:9000",
                secure: false,
                changeOrigin: true,
            },
        },
    },
    plugins: [
        /** Enable hot loading for react-hot-loader */
        new webpack.HotModuleReplacementPlugin(),
    ],
});
