const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: {
        form: path.resolve(__dirname, './src/index.tsx')
    },
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'form.js',
        library: 'form-for-react',
        libraryTarget: "commonjs2",
    },
    externals: 'react',
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [{
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            loader: "ts-loader",
        }]
    },
    plugins:[
        new webpack.DefinePlugin({
            "process.env":{
                NODE_ENV: JSON.stringify('production')
            }
        })
    ]
};