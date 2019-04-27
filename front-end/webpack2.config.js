
module.exports = {
    context: path.join(__dirname),
    entry: {
        bundle: './src/app.jsx',
    },
    output: {
        path: 'bundle.js',
    },

    module: {
        rules: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                test: /\.js$/,
                options: {
                    plugins: [
                        ['import', { libraryName: "antd", style: true }]
                    ]
                },
            }, {
                test: /\.less$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "less-loader",
                        options: {
                            modifyVars: themeVariables
                        }
                    }
                ]
            }
        ]
    }
};

