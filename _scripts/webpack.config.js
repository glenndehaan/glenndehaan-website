const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');

const projectRoot = path.join(__dirname, '../');
const buildDirectory = path.join(projectRoot, 'frontend');
const distDirectory = path.join(projectRoot, 'build');

const ENV = process.env.NODE_ENV || 'development';

module.exports = (env) => {
    const webpackSettings = {
        performance: {
            hints: false
        },
        devServer: {
            host: '0.0.0.0',
            port: 3001,
            index: 'index.html',
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
            filename: 'dist/[name].[hash:6].js',
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
                        query: {
                            presets: [
                                require.resolve('@babel/preset-env'),
                                require.resolve('@babel/preset-react')
                            ],
                            plugins: [
                                [require.resolve('@babel/plugin-transform-react-jsx'), {pragma: 'h'}]
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
            new CopyPlugin([
                {from: 'public/manifest.json'},
                {from: 'public/sitemap.xml'},
                {from: 'public/robots.txt'},
                {from: 'public/docs/*.*', to: 'docs/', flatten: true},
                {from: 'public/fonts/*.*', to: 'fonts/', flatten: true},
                {from: 'public/images/*.*', to: 'images/', flatten: true},
                {from: 'public/images/design/*.*', to: 'images/design/', flatten: true},
                {from: 'public/images/icon/*.*', to: 'images/icon/', flatten: true},
                {from: 'public/images/projects/*.*', to: 'images/projects/', flatten: true}
            ]),
            new HtmlWebpackPlugin({
                template: 'public/index.html',
                inject: false
            }),
            new MiniCssExtractPlugin({
                filename: 'dist/[name].[hash:6].css'
            })
        ]
    };

    if(ENV === "production") {
        webpackSettings.plugins.push(
            new ReplaceInFileWebpackPlugin([{
                dir: 'build',
                test: /\.js$/,
                rules: [{
                    search: '__GITHUB_TOKEN__',
                    replace: env ? env.GITHUB_TOKEN : '__NO_TOKEN__'
                }]
            }]),
        );
    }

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
    
    return webpackSettings;
};
