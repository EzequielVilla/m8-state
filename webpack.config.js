const path = require("path");
const dev = process.env.NODE_ENV == "development";
const liveServer = require("live-server")
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

if (dev) {
    liveServer.start({
        file: "index.html"
    })
}

module.exports = {
    mode: "development",
    watch: dev,
    entry: "index.tsx",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        plugins: [new TsconfigPathsPlugin({/* options: see below */ })],
        extensions: [".tsx", ".ts", ".js"],

    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
};