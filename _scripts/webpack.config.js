const webpack = require('webpack');
const path = require('path');
const combineLoaders = require('webpack-combine-loaders');

const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

//Environment check depending on call from
const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';

const config = {
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
        filename: '[name].js',
        publicPath: '/'
    },

    resolve: {
        extensions: ['.jsx', '.js', '.scss'],
        modules: [path.join(__dirname, 'node_modules')],
        alias: {
            "TweenLite": "gsap/src/uncompressed/TweenLite",
            "TweenMax": "gsap/src/uncompressed/TweenMax",
            "TimelineMax": "gsap/src/uncompressed/TimelineMax.js",
            "ScrollToPlugin": "gsap/src/uncompressed/plugins/ScrollToPlugin.js"
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
                                require.resolve('babel-preset-es2015-native-modules'),
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
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true,
                minifyJS: true
            },
            inject: 'head',
            chunksSortMode: function (a, b) {  //alphabetical order
                if (a.names[0] > b.names[0]) {
                    return -1;
                }

                if (a.names[0] < b.names[0]) {
                    return 1;
                }

                return 0;
            }
        }),

        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        }),

        // Prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin()
    ],

    stats: {
        colors: true
    }
};

//Extra options depending on environment
if (isProd) {
    Object.assign(config, {
        plugins: config.plugins.concat([
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true
            }),
            new webpack.optimize.UglifyJsPlugin({
                drop_console: true,
                output: {
                    comments: false
                },
                mangle: {
                    screw_ie8: true
                },
                compressor: {
                    screw_ie8: true,
                    warnings: false
                }
            })
        ])
    });
}

module.exports = config;
