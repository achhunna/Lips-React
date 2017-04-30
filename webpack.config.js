module.exports = {
    entry: './jsx/main.jsx',
    output: {
        path: __dirname + '/js/',
        filename: 'client.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node-modules)/,
                loader: 'babel-loader',
                query:
                {
                    presets: ['react', 'es2015'],
                    plugins: ["transform-object-rest-spread"]
                }
            }
        ]
    }
}
