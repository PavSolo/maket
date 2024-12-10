const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/js/app.js'),
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '/static',
                    }
                },
            { loader: "css-loader" },
            { loader: "sass-loader" }
                ]}, {
            test: /\.svg$/,
            loader: 'svg-sprite-loader',
        }
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
}