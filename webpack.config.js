const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
    {
        entry: './src/App.ts',
        target: 'electron-main',
        resolve: {
            extensions: ['.ts', '.js', '.json']
        },
        module: {
            rules: [{
                test: /\.ts$/,
                include: /src/,
                use: [{ loader: 'ts-loader' }]
            }]
        },
        output: {
            path: __dirname + '/out',
            filename: 'app.js'
        }
    },
    {
        entry: './src/Preload.ts',
        target: 'electron-preload',
        devtool: 'source-map',
        resolve: {
            extensions: ['.ts', '.js', '.json']
        },
        module: {
            rules: [{
                test: /\.ts$/,
                include: /src/,
                use: [{ loader: 'ts-loader' }]
            },
            {
                test: /\.node$/,
                use: 'node-loader'
            }]
        },
        output: {
            path: __dirname + '/out',
            filename: 'preload.js'
        }
    },
    {
        entry: './src/Render.ts',
        target: 'electron-renderer',
        devtool: 'source-map',
        resolve: {
            extensions: ['.ts', '.js', '.json']
        },
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
            },
            {
                test: /\.node$/,
                use: 'node-loader'
            }]
        },
        output: {
            path: __dirname + '/out',
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
