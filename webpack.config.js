
module.exports = {
    mode: "development",

    module: {
        rules: [
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

    devtool: false,
    devServer: {
        contentBase: './dist'
    }
}
