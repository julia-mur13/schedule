const path = require('path');
const fs = require('fs');

const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './ant-theme-vars.less'), 'utf8'));

themeVariables["@icon-url"] = "'//localhost:8080/fonts/iconfont'";

module.exports = {
    context: path.join(__dirname),
    entry: {
        bundle: './src/app.jsx',
    },
    output: {
        path: 'bundle.js',
    },
    // node: {
    //     fs: "empty"
    // },
    // externals: [
    //     {  "./cptable": "var cptable",  "./jszip": "jszip" }
    // ],
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader',
                query: {
                    modifyVars: themeVariables
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    plugins: [
                        ['import', {libraryName: "antd", style: true}]
                    ]
                }
            },
        ]
    }
};

