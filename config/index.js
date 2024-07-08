const path = require('path')
const webpack = require('webpack')
const WebpackChain = require('webpack-chain')
const HtmlWebpackPlugin = require('html-webpack-plugin')


function processDefault(empConfig) {
  const devServer = empConfig.server || {}
  delete empConfig.server
  const mfOptions = {// 创建模块联邦选项对象
    filename: 'emp.js',// 当前容器为了对外提供模块联邦的服务,生成的单独的文件名
    ...empConfig.empShare
  }
  delete empConfig.empShare
  return {
    context: process.cwd(),
    mode: 'development',
    devtool: false,
    devServer,
    plugin: {
      html: {
        plugin: HtmlWebpackPlugin,
        args: [
          {
            template: path.join(__dirname, '../template/index.html')
          }
        ]
      },
      mf: {
        plugin: webpack.container.ModuleFederationPlugin,
        args: [mfOptions]
      }
    },
    module: {
      rule: {
        compile: {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: {
            'babel-loader': {
              loader: require.resolve('babel-loader'),
              options: {
                presets: [
                  require.resolve('@babel/preset-env'),
                  require.resolve('@babel/preset-react')
                ]
              }
            }
          }
        }
      }
    },
    ...empConfig
  }
}


exports.getConfig = () => {
  const Config = new WebpackChain()
  const empConfigPath = path.resolve(process.cwd(), 'emp-config.js')
  const empConfig = require(empConfigPath)
  const afterConfig = processDefault(empConfig)
  Config.merge(afterConfig)
  console.log('config.toconfig',Config.toConfig())
  return Config.toConfig()
}