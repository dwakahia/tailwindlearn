const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");


module.exports = {
    mode: 'development',
    watch: false,
    entry: {index: path.resolve(__dirname, "src", "index.js")},
    devServer: {
        static: './build',
        hot: true
    },
    output: {
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader"]
            },
            {
                test: /\.(gif|png|jpe?g)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "input.css",
        })
    ]
};

