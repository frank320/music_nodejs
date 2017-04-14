var musicList = [
  new Music({ id: 1, title: '富士山下', singer: '陈奕迅', music: '陈奕迅 - 富士山下.mp3', poster: '陈奕迅.jpg' }),
  new Music({ id: 2, title: '石头记', singer: '达明一派', music: '达明一派 - 石头记.mp3', poster: '达明一派.jpg' }),
  new Music({ id: 3, title: '青城山下白素贞', singer: '好妹妹乐队', music: '好妹妹乐队 - 青城山下白素贞.mp3', poster: '好妹妹乐队.jpg' }),
  new Music({ id: 4, title: '友情岁月', singer: '黄耀明', music: '黄耀明 - 友情岁月.mp3', poster: '黄耀明.jpg' }),
  new Music({ id: 5, title: '梦里水乡', singer: '江珊', music: '江珊 - 梦里水乡.mp3', poster: '江珊.jpg' }),
  new Music({ id: 6, title: 'Blowing In The Wind', singer: '南方二重唱', music: '南方二重唱 - Blowing In The Wind.mp3', poster: '南方二重唱.jpg' }),
  new Music({ id: 7, title: '女儿情', singer: '万晓利', music: '万晓利 - 女儿情.mp3', poster: '万晓利.jpg' }),
  new Music({ id: 8, title: '王馨平', singer: '别问我是谁', music: '王馨平 - 别问我是谁.mp3', poster: '王馨平.jpg' }),
  new Music({ id: 9, title: '五环之歌', singer: '岳云鹏', music: '岳云鹏,MC Hotdog - 五环之歌.mp3', poster: '岳云鹏.jpg' })
]

module.exports = Music

function Music(music) {
  this.id = music.id
  this.title = music.title
  this.singer = music.singer
  this.music = music.music
  this.poster = music.poster
}

// 获取所有的音乐列表信息
Music.getAll = function() {
  return musicList
}

Music.getById = function (id) {
  var musicObj = null
  musicList.forEach(function (music) {
    if (id === music.id) {
      musicObj = music
    }
  })
  return musicObj
}

// 不需要外部传递 ID 进来
Music.prototype.save = function() {
  var newId = 0
  musicList.forEach(function(music) {
    if (music.id > newId) {
      newId = music.id
    }
  })
  musicList.push({
    id: newId + 1,
    title: this.title,
    singer: this.singer,
    music: this.music,
    poster: this.poster
  })
}

// 删除
Music.removeById = function(id) {
  musicList.splice(id, 1)
}

// 更新音乐信息
Music.updateById = function(id, title, singer) {
  // 修改之前判断一下该记录是否存在
  var isExists = false
  var music_index = -1
    // 先判定一下该记录是否存在
  musicList.forEach(function(music, index) {
    if (music.id == id) {
      isExists = true
      music_index = index
    }
  })
  if (isExists) {
    musicList[music_index].title = title
    musicList[music_index].singer = singer
    musicList[music_index].music = musicList[music_index].music
    musicList[music_index].poster = musicList[music_index].poster
  }
}
