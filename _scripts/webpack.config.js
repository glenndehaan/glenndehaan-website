const webpack = require('webpack');
const path = require('path');
const combineLoaders = require('webpack-combine-loaders');

const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, '../public'),
        hot: true,
        port: 8080,
        host: '0.0.0.0',
        historyApiFallback: true,
        public: 'localhost:8080',
        disableHostCheck: true
    },

    devtool: 'source-map',

    entry: {
        'app': [
            'babel-polyfill',
            'react-hot-loader/patch',
            '../public/js/index'
        ],
        'style': '../public/scss/style.scss'
    },

    output: {
        path: path.resolve(__dirname, '../public/dist'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['.jsx', '.js', '.scss'],
        modules: [path.join(__dirname, 'node_modules')],
        alias: {
            "TweenLite": "gsap/src/uncompressed/TweenLite",
            "TweenMax": "gsap/src/uncompressed/TweenMax",
            "TimelineMax": 'gsap/src/uncompressed/TimelineMax.js'
        }
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: combineLoaders([
                    {
                        loader: 'react-hot-loader/webpack'
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                require.resolve('babel-preset-react')
                            ],
                            plugins: [
                                require.resolve('babel-plugin-transform-object-rest-spread'),
                                require.resolve('babel-plugin-transform-react-jsx')
                            ]
                        }
                    }
                ])
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'raw-loader?url=false', {
                        loader: 'postcss-loader',
                        options: {
                            context: path.resolve(__dirname, '../public'),
                            sourceMap: 'inline',
                            plugins: [
                                autoprefixer
                            ],
                        }
                    },
                    'sass-loader?sourceMap=true'
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            minify: {collapseWhitespace: true}
        }),

        // Prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin()
    ],

    stats: {
        colors: true
    }
};
