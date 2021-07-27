const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = "development"

if (process.env.NODE_ENV === 'production')
    mode = "production"

module.exports = {
    mode: mode,

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            // 配置 babel-loader (第一步)
            {
                test: /\.m?js$/,
                // 排除 node_modules 與 bower_components 底下資料 (第二步)
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',//自動尋找設定檔 babel.config.js
                },
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin()],
    devtool: "source-map",
    devServer: {
        contentBase: './dist',
        hot: true
    }
}
