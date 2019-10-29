const path = require('path')
module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Expressão regular para capturar arquivos com extensão .js
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},     
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: {
                    loader: 'file-loader'
                },
            },
            {
                test: /\.svg$/, // Expressão regular para capturar arquivos com extensão .js
                exclude: /node_modules/,
                use: {
                    loader: 'react-svg-loader',
                }
            },
        ],
    },
};