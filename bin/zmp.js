#!/usr/bin/env node
// console.log('zmp------')
const pkg = require('../package.json')
// 新版本的写法
const { Command } = require('commander');
const program = new Command();


// 设置当前脚手架版本号
program.version(pkg.version, '-v,--version')
.usage('<command> [options]');
program.command('init').description('创建项目')
.option('-t,--template [templates]','JSON数据 HTTP的地址或者是文件的相对或绝对路径')
.action(options  => {
  console.log('init', options)
})
program.parse(process.argv);



