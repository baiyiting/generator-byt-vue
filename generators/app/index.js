const Generator = require('yeoman-generator')
module.exports = class extends Generator {
  // 接收用户输入
  prompting() {
    return this.prompt([{
        type: 'input',
        name: 'name',
        message: 'Your project name ',
        default: this.appname
      }])
      .then(res => {
        // 写入的值
        //res = {name: 'user input value'}
        this.answers = res
      })
  }

  writing() {
    //自定义生成器目录下的所有文件的相对路径
    const templates = [
      'src/App.vue',
      '.eslintrc.js',
      'public/index.html'
    ]
    // 遍历我们的 模板文件
    templates.forEach(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      )
    })

  }
}