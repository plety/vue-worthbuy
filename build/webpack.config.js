const path = require("path");
const vueLoaderConfig = require('./vue-loader.conf')

console.log(path.resolve(__dirname,'../dist'))

module.exports = {
    entry: path.resolve(__dirname,'../src/index.js'),
    output: {
        path:path.resolve(__dirname,'../dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, 
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                'vue-style-loader',
                'css-loader',
                'less-loader'
                ]
            }
        ]
    }
};
