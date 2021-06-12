const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//для минификации css файлов. удаление пробелов комментов и так далее
const TerserWebpackPlugin = require('terser-webpack-plugin');//для минификации js файлов. удаление пробелов комментов и так далее 
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const cssLoaders = (extra) => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: { 
                publicPath: '',
            }
        }, 'css-loader'
    ]
    if (extra)  {
        loaders.push(extra)        
    }
    return loaders;
}

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
    if(isProd) {
        config.minimizer = [
            new OptimizeCssAssetsPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config;
}

const plugins = () => {
    const base = [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),// очешает папку от ненужных файлов
        // new CopyWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
              { from: "./index.png", to: path.resolve(__dirname, 'build') }
            //   { from: "./assets/img", to: path.resolve(__dirname, 'dist/img') }

            ],
        }),
        new MiniCssExtractPlugin({
            filename: filename('css') 
        })
    ];
    // if(isProd) {
    //     base.push(new BundleAnalyzerPlugin())
    // }
    return base;
}
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;
//функция карторая возврашяет имя для названия файлов. по типу main.js для разработки main[hash],js для продакшена

const babelOptions = (preset) => {
    const options =  {
        presets: [
            '@babel/preset-env'
        ],//preset-env это набор плагинов для работы с js в его современном формате ()
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    }
    if(preset) {
        options.presets.push(preset)
    } 
    return options;
}
const config = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill','./index.jsx'],
    },//Точка входа. может быть несколько входов
    output: {
        filename: filename('js'),//chunk-и 'main.bundle.js, ...'
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],//default only js
        // alias: {
        //     '@models': path.resolve(__dirname, 'src/models') // короткое имя пути до папки. чтобы не писать напрмер './../../../'
        // }
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        open: true,
    },
    devtool: isDev ? 'source-map' : false,
    plugins: plugins(),
    // loaders: 
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/,
                // use: ['file-loader']
                type: 'asset/resource'
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions()
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions('@babel/preset-react')
                }
            }
        ]
    }
}
module.exports = config;