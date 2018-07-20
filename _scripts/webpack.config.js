const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const projectRoot = path.join(__dirname, '../');
const buildDirectory = path.join(projectRoot, 'public');
const distDirectory = path.join(projectRoot, 'public/dist');

const ENV = process.env.NODE_ENV || 'development';

const webpackSettings = {
    performance: {
        hints: false
    },
    entry: {
        main: [
            path.join(buildDirectory, 'js/index.js'),
            path.join(buildDirectory, 'scss/style.scss')
        ]
    },
    output: {
        path: distDirectory,
        filename: '[name].js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    failOnError: true,
                    failOnWarning: false
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: [
                            require.resolve('babel-preset-env'),
                            require.resolve('babel-preset-react')
                        ],
                        plugins: [
                            [require.resolve('babel-plugin-transform-react-jsx'), {pragma: 'h'}]
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader?url=false',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
};

if (ENV === "production") {
    webpackSettings.optimization = {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: false,
                uglifyOptions: {
                    warnings: false,
                    output: {
                        comments: false,
                        beautify: false
                    }
                }
            })
        ]
    };
}

module.exports = webpackSettings;
