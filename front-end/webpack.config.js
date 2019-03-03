const eslintFormatter = require('react-dev-utils/eslintFormatter');
const {injectBabelPlugin} = require('react-app-rewired');

module.exports = {
    context: __dirname,

    entry: './src/app.less',

    output: {
        filename: "bundle.css",
    },

    target: 'web',
    mode: 'development',

    module: {
        rules: [{
            test: /\.(js|jsx|mjs)$/,
            enforce: 'pre',
            use: [
                {
                    options: {
                        formatter: eslintFormatter,
                        eslintPath: require.resolve('eslint'),

                    },
                    loader: require.resolve('eslint-loader'),
                },
            ],
        }, {
            test: /\.less$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'less-loader'
            }]
        }]
    }
};
