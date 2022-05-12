const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
require("events").EventEmitter.defaultMaxListeners = 0;
// 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
    remUnit: 192 
})

// 使用等比适配插件
module.exports = {
    publicPath: "./",
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: false,
    runtimeCompiler: true, 
    devServer: {
        overlay: {
            warnings: true,
            errors: true,
        },
        open: true, 
        port: "8090",
        hot:true,
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    },
    chainWebpack:(config)=>{
        config.resolve.alias
        .set("@", resolve("src"))
      .set("components", resolve("src/components"))
    }
}
