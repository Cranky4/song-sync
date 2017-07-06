var express = require('express')
var router = express.Router()
var MemoryStorage = require('memorystorage')
var nl2br = require('nl2br')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('song')
})

router.post('/', function (req, res, next) {
  var text = req.body.text
  var storage = new MemoryStorage()

  text = text.replace(/[^\S\n]/g, "&nbsp;")
  text = nl2br(text);
  storage.setItem('song', text)

  res.redirect('/')
})

module.exports = router