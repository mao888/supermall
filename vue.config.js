module.exports = {
  configureWebpack: {
    resolve: {                  //配置路径
      alias: {                  //别名
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  devServer: { // 环境配置
    host: '0.0.0.0',
    public:'10.102.93.184:8080',
    port: 8080,
    https: false,
    hotOnly: false,
    disableHostCheck:true,
    open: true // 配置自动启动浏览器
 
},
}

