const webpack = require("webpack");

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    "entry": "./src/index.jsx",
    "output": {
        "path": __dirname + "/public",
        "filename": "./bundle.js"
    },
    "devServer": {
        "port": 8080,
        "contentBase": "./public"
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ],
    resolve: {
        extensions: ['','.css','.js','.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
     module: {
        loaders: [{
             test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015','react'],
                plugins: ['transform-object-rest-spread']
            }
        }, 
        // O loader de css foi adicionado no ex.4
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },
        {
            test: /\.woff|.woff2|.ttf|.eot|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }

}