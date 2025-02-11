const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/js/app.js'),
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                },
            { loader: "css-loader" },
            { loader: "sass-loader" }
                ]
        },{
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]', // Сохраняет оригинальное имя и путь
                        outputPath: '', // Папка в dist, куда будут скопированы изображения
                        publicPath: '', // Путь, который будет использоваться в HTML/CSS
                    },
                },
            ],
        },

            {
            test: /\.svg$/,
            use: ['svg-sprite-loader'],
        }]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: 'index.html', // Ваш HTML-шаблон
        })
    ]
}