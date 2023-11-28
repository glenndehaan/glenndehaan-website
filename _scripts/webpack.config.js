const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
const CreateFileWebpack = require('create-file-webpack');
const { v4: uuid } = require('uuid');

const projectRoot = path.join(__dirname, '../');
const buildDirectory = path.join(projectRoot, 'frontend');
const distDirectory = path.join(projectRoot, 'build');

const ENV = process.env.NODE_ENV || 'development';

module.exports = () => {
    const webpackSettings = {
        performance: {
            hints: false
        },
        devServer: {
            host: '0.0.0.0',
            port: 3001,
            historyApiFallback: true
        },
        entry: {
            main: [
                path.join(buildDirectory, 'index.js'),
                path.join(buildDirectory, 'scss/style.scss')
            ]
        },
        output: {
            path: distDirectory,
            filename: 'dist/[name].[fullhash:6].js',
            publicPath: '/'
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
                        options: {
                            presets: [
                                require.resolve('@babel/preset-react')
                            ],
                            plugins: [
                                [require.resolve('@babel/plugin-transform-react-jsx'), {pragma: 'h', pragmaFrag: 'Fragment'}]
                            ]
                        }
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                url: false
                            }
                        },
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins: [
            new CopyPlugin({
                patterns:[
                    {from: 'public/kill-switch.txt'},
                    {from: 'public/manifest.json'},
                    {from: 'public/sitemap.xml'},
                    {from: 'public/robots.txt'},
                    {from: 'public/sw.js'},
                    {from: 'public/docs/*.*', to: 'docs/[name][ext]'},
                    {from: 'public/fonts/*.*', to: 'fonts/[name][ext]'},
                    {from: 'public/images/*.*', to: 'images/[name][ext]'},
                    {from: 'public/images/design/*.*', to: 'images/design/[name][ext]'},
                    {from: 'public/images/icon/*.*', to: 'images/icon/[name][ext]'},
                    {from: 'public/images/projects/*.*', to: 'images/projects/[name][ext]'}
                ]
            }),
            new HtmlWebpackPlugin({
                template: 'public/index.html',
                inject: false
            }),
            new MiniCssExtractPlugin({
                filename: 'dist/[name].[fullhash:6].css'
            })
        ]
    };

    if(ENV === "production") {
        webpackSettings.plugins.push(
            new ReplaceInFileWebpackPlugin([
                {
                    dir: 'build',
                    test: /\.js$/,
                    rules: [{
                        search: '__GITHUB_TOKEN__',
                        replace: process.env.APP_GITHUB_TOKEN ? process.env.APP_GITHUB_TOKEN : '__NO_TOKEN__'
                    }]
                },
                {
                    dir: 'build',
                    test: /\.js$/,
                    rules: [{
                        search: /__SW_VERSION__/g,
                        replace: `glenndehaan.com_${uuid()}`
                    }]
                }
            ]),
            new CreateFileWebpack({
                path: distDirectory,
                fileName: 'kill-switch.txt',
                content: process.env.SW_KILL ? process.env.SW_KILL : 'false'
            })
        );
    }

    return webpackSettings;
};
