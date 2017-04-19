var webpack = require('webpack');
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + '/app',
    entry: './app.jsx',
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Nav: 'app/components/nav_component.jsx',
            UtilBox: 'app/components/util_bar_component.jsx',
            Main: 'app/components/main_component.jsx',
            About: 'app/components/about_component.jsx',
            Csgo: 'app/components/csgo_component.jsx'
        },
        extensions: ['', '.js', '.jsx', '.css', '.less']
    },
    module: {
        preLoaders: [
            { loader: 'source-map' }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },              
                exclude: /node_modules/  
            },            
            { 
                test:  /\.(less|css)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: "css-loader!less-loader"
                }), 
            }
        ]
    },
    plugins: [
        new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$")),

        new ExtractTextPlugin('style.css')
    ],

    stats: { colors: true }
};