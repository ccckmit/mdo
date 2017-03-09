var fs = require('fs')
var assert = require('assert')
var MDO = require('../mdo')

describe('MDO', function () {
  describe('parse(test.mdo)', function () {
    var testMdo = fs.readFileSync('test/test.mdo', 'utf8')
    var mdoObj = MDO.parseMdo(testMdo)
    var testJson = fs.readFileSync('test/test.json', 'utf8')
    var jsonObj = JSON.parse(testJson)
    it('parse(test.mdo)===testJson', function () {
      assert.equal(JSON.stringify(mdoObj), JSON.stringify(jsonObj))
    })
  })
})
