const Chain = require('./webpack-chain')
const config = new Chain()
const path = require('path')
config
  .entry('index') // 添加一个入口,名称叫index
  .add('./src/index.js') // 为index这个入口添加文件路径
  .end() // 结束对当前入口的配置回到config实例
  .output // 修改输出配置
  .path(path.resolve('dist'))
  .filename('[name].js')
  .end()

const options = config.toConfig()
console.log(options);

/**
 * 
 * 
 * {
  output: {
    path: '/Users/mac/Desktop/aproject/emps/zmp/dist',
    filename: '[name].js'
  },
  entry: { index: [ './src/index.js' ] }
}
 */