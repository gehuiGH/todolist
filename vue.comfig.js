// module.exports = {
//     // publicPath: './',
//  };
 const {defineConfig} = require('@vue/cli-service')
 module.exports = defineConfig({
    transpileDependencies:true, 
    //解决build打包的时候 dist文件里面css、js、img路径错误错误的问题
    publicPath:'./',
    outputDir:"dist",
    assetsDir:'public'
 })
 const webpack = require("webpack");
 module.exports = {
     pluginOptions: new webpack.ProvidePlugin({
         jQuery: "jquery",
         $: "jquery"
     }),
     baseUrl: './' // 加入这行就可以了
 };
