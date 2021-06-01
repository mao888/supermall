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
  }
}

