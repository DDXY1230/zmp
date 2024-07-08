const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')

class DevServer {
  async setup() {
    await this.startServer()
  }
  async startServer() {
    const config = {devServer: {port: 1008}}
    const compiler = webpack(config)
    this.server = new WebpackDevServer(config.devServer,compiler)
    this.server.start()
  }
}
module.exports = new DevServer()