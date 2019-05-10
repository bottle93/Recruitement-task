const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: "./src/1.html",
            filename: "1.html"
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: "./src/2.html",
            filename: "2.html"
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: "./src/3.html",
            filename: "3.html"
        })
    ]
};
