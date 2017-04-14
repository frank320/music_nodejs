/**
 * 对于 router.js 文件来说
 * 将具体的请求路径分发到一个具体的请求处理函数
 */

var fs = require('fs')
var path = require('path')
var mime = require('mime')
var url = require('url')

var indexController = require('./controllers/index')
var musicController = require('./controllers/music.js')

module.exports = function(req, res) {

  // 注意：在做字符比较的时候，最好先转换成大小或者小写再进行比较
  var method = req.method.toLowerCase()

  // 注意：中文路径会编码，然后再发出请求
  // 所以一定要将url解码之后再使用
  // 第二个参数 为 true 时，自动将查询字符串转换为一个对象
  var urlObj = url.parse(decodeURI(req.url), true)
  var pathname = urlObj.pathname
  // 给 req 对象挂在一个 query 属性，在后面就可以直接拿来即用了
  req.query = urlObj.query

  // 我们只给用户提供静态资源服务，不要把整站都当成静态资源提供给用户
  // 否则用户就随便的看到网站的源码，网站就不安全
  if (method === 'get' && pathname === '/') {

    indexController.showIndex(req, res)

  } else if (method === 'get' && (pathname.startsWith('/node_modules/') || pathname.startsWith('/uploads/'))) {

    var staticPath = path.join(__dirname, pathname)
    fs.readFile(staticPath, function(err, data) {
      if (err) {
        return res.end(err.message)
      }
      var contentType = mime.lookup(pathname)
      res.writeHead(200, {
        'Content-Type': contentType
      })
      res.end(data)
    })

  } else if (method === 'get' && pathname === '/favicon.ico') {

    res.end()

  } else if (method === 'get' && pathname === '/add') {

    musicController.showAdd(req, res)

  } else if (method === 'get' && pathname === '/edit') {

    musicController.showEdit(req, res)

  } else if (method === 'get' && pathname === '/login') {

    res.render('login', {

      title: '用户登录'
    })

  } else if (method === 'post' && pathname === '/add') {

    musicController.doAdd(req, res)

  } else if (method === 'post' && pathname === '/edit') {
    musicController.doEdit(req, res)
  } else if (method === 'get' && pathname === '/remove') {
    musicController.doRemove(req, res)
  }
}
