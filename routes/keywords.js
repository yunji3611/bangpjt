var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  var word = req.query.word;
  if(word) {
      var result = ["의자", "화", "러그"]
        }


  res.json({
    "result": {
      "message": "해당검색어에대한 결과입니다",
      "words": result
    }
  });
});


module.exports = router;