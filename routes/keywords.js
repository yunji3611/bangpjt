var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  var tag = req.query.tag;
  if(tag) {
      var result = {
        "tag" : "태그명",
        "tag" : "태그명"
      };

  }
  res.json({
    "result": {
      "message": "해당검색어에대한 결과입니다",
      "hashtag": result
    }
  });
});


module.exports = router;