var express = require('express')
var router = express.Router()
var MemoryStorage = require('memorystorage')

/* GET home page. */
router.get('/', function (req, res, next) {
  var storage = new MemoryStorage()
  var text = storage.getItem('song')

  res.render('index', {title: 'Поём', text: text})

})

module.exports = router