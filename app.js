var http = require('http')
var config = require('./config')
var router = require('./router')
var render = require('./common/render')

var server = http.createServer()

server.on('request', function(req, res) {

  // 给 res 对象挂在一个 render 方法，方便我们在 后面的代码中使用
  render(res)

  // 给 res 对象挂载一个 json 方法，方便在后面使用
  res.json = function (obj) {
    var jsonStr = JSON.stringify(obj)
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8'
    })
    res.end(jsonStr)
  }
  //网页重定向
  res.redirect = function (url) {
    res.writeHead(302, {
      'Location': url
    })
    res.end()
  }
  // 进入路由，根据不同请求路径分发具体处理函数
  router(req, res)

})

// 启动监听
server.listen(config.port, function(err) {
  if (err) {
    throw new Error('端口号被占用了，请更换一个')
  }
  console.log('server is listening at port ' + config.port)
  console.log('please visit http://' + config.host + ':' + config.port)
})
