var webpack = require('webpack');

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
        extensions: ['', '.js', '.jsx', '.less']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /node_modules/
            },            
            { 
                loader: 'style-loader!css-loader!less-loader', 
                test: /\.less$/,
                exclude: /node_modules/ }
        ]
    },
    plugins: [
        new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
    ]
};