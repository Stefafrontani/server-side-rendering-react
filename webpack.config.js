const path = require('path');

module.exports = {
    entry: {
        home: path.resolve(__dirname + '/src/client/pages/home/index'),
        about: path.resolve(__dirname + '/src/client/pages/about/index')
    },
    output: {
        path: path.resolve(__dirname, 'src', 'client', 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                },
                exclude: ['/node_modules/']
            }
        ]
    }
};