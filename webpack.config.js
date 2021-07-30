const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = "development"
if (process.env.NODE_ENV === 'production')
    mode = "production"

module.exports = {
    mode: mode,
    // 絕對路徑 + ./src
    context: path.resolve(__dirname, './src'),
    // 進入點 = 絕對路徑 + ./src/index.js
    entry: { index: './index.js', },
    // 輸出點 = 絕對路徑 + ./dist
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    // 導入打包器 （xxx-loader）
    module: {
        rules: [
            {
                // 編譯 css 檔
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                // 編譯 scss 檔到 css 檔
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                // 配置 babel-loader (第一步)
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
        hot: true,
        compress: true,
        port: 3000,
        stats: {
            assets: true,
            cached: false,
            chunkModules: false,
            chunkOrigins: false,
            chunks: false,
            modules: false,
            colors: true,
            warnings: false,
            reasons: false,
            version: false,
            source: false,
            hash: false
        }
    }
}
