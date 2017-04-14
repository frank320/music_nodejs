var path = require('path')

module.exports = {
  port: 3000,
  host: '127.0.0.1',
  templatePath: path.join(__dirname, 'views/'),
  templateExtName: '.html',
  uploadDir: path.join(__dirname, 'uploads/')
}
