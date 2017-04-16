const webpack = require("webpack");

const ExtractTextPlugin = require('extract-text-webpack-plugin');

// this config can be in webpack.config.js or other file with constants
var API_URL = {
    production: JSON.stringify('prod-url'),
    development: JSON.stringify('http://localhost:3003/api/todos')
}

// check environment mode
var environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';

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
        new ExtractTextPlugin('bundle.css'),
        new webpack.DefinePlugin({
            'API_URL': API_URL[environment]
        })
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