var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
  var result = {
    "mainList": [{
      "post_id": 1111,
      "file_url": "debug=bangpjt:server sudo forever start ./bin/www",
      "post_count" : 100,
      "scrap_count": 22,
      "category": "모던",
      "category_id" : 1,
      "content": "게시물 내용"
    },
      {
        "post_id": 2222,
        "file_url": "debug=bangpjt:server sudo forever start ./bin/www",
        "scrap_count": 22,
        "post_count" : 100,
        "category": "북유럽",
        "category_id" : 2,
        "content": "게시물 내용"

      },

      {
        "post_id": 3333,
        "file_url": "debug=bangpjt:server sudo forever start ./bin/www",
        "scrap_count": 22,
        "post_count" : 100,
        "category": "빈티지",
        "category_id" : 3,
        "content": "게시물 내용"

      },

      {
        "post_id": 4444,
        "file_url": "debug=bangpjt:server sudo forever start ./bin/www",
        "scrap_count": 22,
        "post_count" : 100,
        "category": "프로방스",
        "category_id" : 4,
        "content": "게시물 내용"

      },

    ]

  }

  res.json({
    "result": {
      "message": "메인페이지가 조회되었습니다",
      "mainData": result
    }
  });
})


module.exports = router;
