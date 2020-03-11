module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
    filename: 'build.js',
    path: __dirname + '/build',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }

};
