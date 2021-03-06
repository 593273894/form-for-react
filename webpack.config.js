const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const env = process.env.NODE_ENV;

module.exports = {
    entry: {
        form: path.resolve(__dirname, './src/index.tsx')
    },
    output: {
        path: path.resolve(__dirname, './'),
        filename: env === 'production' ? 'form.js' : './tests/form.js',
        library: 'form-for-react',
        libraryTarget: "umd",
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            loader: "ts-loader",
        }]
    },
    optimization: {
        minimize: false,
    },
};