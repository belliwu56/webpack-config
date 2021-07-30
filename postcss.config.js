console.log("載入 postcss.config.js ...")

module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: [
                '> 1%',
                'last 5 versions',
                'firefox >= 45',
                'ios >= 8',
                'safari >= 8',
                'ie >= 10',
            ]
        })
    ]
}
