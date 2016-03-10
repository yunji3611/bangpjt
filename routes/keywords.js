var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  var word = req.query.word;
  if(word) {
      var result = [{"word":"의"}, {"word" : "화"}]
        }


  res.json({
    "result": {
      "message": "해당검색어에대한 결과입니다",
      "words": result
    }
  });
});


module.exports = router;