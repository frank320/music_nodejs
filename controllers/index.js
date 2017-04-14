// 可能有不同的 处理模块都会用到相同的数据
// 音乐数据 music.js
// 用户相关数据 user.js
// 产品相关数据
// 订单相关数据
var Music = require('../models/music')
exports.showIndex = function(req, res) {
  res.render('index', {
    title: '首页',
    musicList: Music.getAll()
  })
}
