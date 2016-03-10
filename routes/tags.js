var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var result = {
    "postList": [{
      "post_id": 1111,
      "username" : "작성자",
      "photo_url": "./public/photos/user/profile.jpg",
      "file_url": "./public/photos/interior/europe.jpg",
      "scrap_count": 22,
      "hash_tag": ["간이의자",  "화장대"],
      "category": "북유럽",
      "content": "게시물내용",

    },
      {
        "post_id": 2222,
        "username" : "작성자",
        "photo_url": "./public/photos/user/profile.jpg",
        "file_url": "./public/photos/interior/europe.jpg",
        "scrap_count": 22,
        "hash_tag": ["간이의자",  "화장대"],
        "category": "없음",
        "content": "게시물내용",

      }]

  }

  res.json({
    "result": {
      "message": "게시물 목록이 조회되었습니다",
      "page": 1,
      "listperPage": 6,
      "postData": result
    }
  });
})

module.exports = router;