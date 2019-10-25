const express = require('express')
const router = new express.Router()
const path = require('path')
const fs = require('fs')
const showdown = require('showdown'),
  converter = new showdown.Converter(),
  text = '# hello, markdown!'

router.get('/', function (req, res) {
  fs.readFile(path.join(__dirname, '../intro.md'), 'utf8', (err, mdText) => {
    if (err) console.error(err)
    res.send(converter.makeHtml(mdText))
  })
})

module.exports = router