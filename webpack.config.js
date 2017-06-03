var webpack = require('webpack');
    ExtractTextPlugin = require('extract-text-webpack-plugin');
    path = require('path');

module.exports = {
    context: __dirname + '/app',
    entry: './app.jsx',
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'app'),
            'node_modules'
        ],
        alias: {
            Nav$: path.resolve(__dirname, 'app/components/nav_component.jsx'),
            UtilBox$: path.resolve(__dirname, 'app/components/util_bar_component.jsx'),
            Main$:  path.resolve(__dirname, 'app/components/main_component.jsx'),
            About$:  path.resolve(__dirname, 'app/components/about_component.jsx'),
            Csgo$:  path.resolve(__dirname, 'app/components/csgo_component.jsx'),
            CsgoMatches$: path.resolve(__dirname, 'app/components/csgo_league_matches.jsx'),
            CsgoEvents$: path.resolve(__dirname, 'app/components/csgo_events_list.jsx')
        },
        extensions: ['.js', '.jsx', '.css', '.less']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', 'es2015', 'stage-0']
                        },
                    }
                ],              
                exclude: /node_modules/  
            },            
            { 
                test:  /\.(less|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$")),

        new ExtractTextPlugin({
            filename: 'style.css',
            disable: false,
            allChunks: true
        })
    ],

    stats: { colors: true }
};