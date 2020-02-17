module.exports = {
  publicPath: "./",//配置打包后index.html导入的的文件目录
  assetsDir:'./',//配置打包后的静态文件目录
  devServer: {  
    open:true,
    proxy: {
      "^/api": {
        // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
        // target: "http://c.m.163.com",
        target:'http://localhost:3000/',
        // target: 'http://api.komavideo.com',
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
