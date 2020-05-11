const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
    // Main application
    {
        entry: './src/App.ts',
        target: 'electron-main',
        node: {
            __dirname: false,
        },
        resolve: {
            extensions: ['.ts', '.js', '.json'],
        },
        module: {
            rules: [{
                    test: /\.ts$/,
                    include: /src/,
                    use: [{ loader: 'ts-loader' }],
                },
                {
                    test: /\.node$/,
                    use: 'node-loader',
                },
            ],
        },
        output: {
            path: __dirname + '/out',
            filename: 'app.js',
        },
    },
    // Settings preload
    {
        entry: './src/Settings/Preload.ts',
        target: 'electron-preload',
        devtool: 'source-map',
        resolve: {
            extensions: ['.ts', '.js', '.json'],
        },
        module: {
            rules: [{
                test: /\.ts$/,
                include: /src/,
                use: [{ loader: 'ts-loader' }],
            }, ],
        },
        output: {
            path: __dirname + '/out/settings',
            filename: 'preload.js',
        },
    },
    // Module preload
    {
        entry: './src/Widget/Preload.ts',
        target: 'electron-preload',
        devtool: 'source-map',
        resolve: {
            extensions: ['.ts', '.js', '.json'],
        },
        module: {
            rules: [{
                    test: /\.ts$/,
                    include: /src/,
                    use: [{ loader: 'ts-loader' }],
                },
                {
                    test: /\.node$/,
                    use: 'node-loader',
                },
            ],
        },
        output: {
            path: __dirname + '/out/widgets',
            filename: 'preload.js',
        },
    },
    {
        entry: './src/Render.ts',
        target: 'electron-renderer',
        devtool: 'source-map',
        resolve: {
            extensions: ['.ts', '.js', '.json'],
        },
        module: {
            rules: [{
                    test: /\.ts(x?)$/,
                    include: /src/,
                    use: [{ loader: 'ts-loader' }],
                },
                {
                    test: /\.css$/i,
                    include: /src/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
                {
                    test: /\.node$/,
                    use: 'node-loader',
                },
            ],
        },
        output: {
            path: __dirname + '/out',
            filename: 'renderer.js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
            new MiniCssExtractPlugin(),
        ],
    },
    // Settings page
    {
        entry: './src/Settings/Render.ts',
        target: 'electron-renderer',
        devtool: 'source-map',
        resolve: {
            extensions: ['.ts', '.js', '.json'],
        },
        module: {
            rules: [{
                    test: /\.ts(x?)$/,
                    include: /src/,
                    use: [{ loader: 'ts-loader' }],
                },
                {
                    test: /\.css$/i,
                    include: /src/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
            ],
        },
        output: {
            path: __dirname + '/out/settings',
            filename: 'settings.js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/Settings/index.html',
            }),
            new MiniCssExtractPlugin(),
        ],
    },

    // Prediction Widget
    {
        entry: './src/Widget/Prediction/Render.ts',
        target: 'electron-renderer',
        devtool: 'source-map',
        resolve: {
            extensions: ['.ts', '.js', '.json'],
        },
        module: {
            rules: [{
                    test: /\.ts(x?)$/,
                    include: /src/,
                    use: [{ loader: 'ts-loader' }],
                },
                {
                    test: /\.css$/i,
                    include: /src/,
                    use: [{
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: __dirname + '/out/widgets/prediction',
                            },
                        },
                        'css-loader',
                    ],
                },
            ],
        },
        output: {
            path: __dirname + '/out/widgets/prediction',
            filename: 'render.js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/Widget/Prediction/index.html',
            }),
            new MiniCssExtractPlugin(),
        ],
    },
];