const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    target: ['browserslist'],
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devServer: {
        static: './dist',
        port: 3005,
        open: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Monaco simple app",
            inject: true,
            template: path.resolve(__dirname, 'public/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
}