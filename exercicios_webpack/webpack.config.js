const webpack = require("webpack");

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    "entry": "./ex/index.js",
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
     module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                // Preset 'react' adicionado no ex.3
                presets: ['es2015','react'],
                // Plugin adicionado no ex.2
                plugins: ['transform-object-rest-spread']
            }
        }, 
        // O loader de css foi adicionado no ex.4
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }
        ]
    }

}