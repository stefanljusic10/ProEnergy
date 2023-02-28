const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, './src/js/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { url: false } },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ProEnergy',
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]
}