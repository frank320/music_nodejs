var fs = require('fs')
var path = require('path')
var template = require('art-template')
var config = require('../config')

module.exports = function(res) {
  // 约定：把所有的静态模板文件都放到 views 目录中
  res.render = function(templateName, contextObj) {
    // 这里将 index.hmtl 文件中的内容整体当成了模板字符串
    fs.readFile(path.join(config.templatePath, templateName + config.templateExtName), 'utf8', function(err, data) {
      if (err) {
        return res.end(err.message)
      }
      var render = template.compile(data)
      var htmlStr = render(contextObj)
      res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8'
        })
        // 在发送给客户端之前，就已经在后台将数据和模板字符串绑定到一起了（解析替换了）
      res.end(htmlStr)
    })
  }
}
