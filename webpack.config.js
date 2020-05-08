const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
    {
        mode: 'development',
        entry: './src/App.ts',
        target: 'electron-main',
        module: {
            rules: [{
                test: /\.ts$/,
                include: /src/,
                use: [{ loader: 'ts-loader' }]
            }]
        },
        output: {
            path: __dirname + '/dist',
            filename: 'app.js'
        }
    },
    {
        mode: 'development',
        entry: './src/Render.ts',
        target: 'electron-renderer',
        devtool: 'source-map',
        module: {
            rules: [{
                test: /\.ts(x?)$/,
                include: /src/,
                use: [{ loader: 'ts-loader' }]
            },
            {
                test: /\.css$/i,
                include: /src/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
              },]
        },
        output: {
            path: __dirname + '/dist',
            filename: 'renderer.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            new MiniCssExtractPlugin()
        ]
    }
];
