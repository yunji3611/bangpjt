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
      "hash_tag": ["의자", "침대"],
      "category": "북유럽",
      "post_count": 50,
      "furnitures": [{
        "furniture_url": "./public/photos/furniture/chair.jpg",
        "brand": "IKEA",
        "name": "한샘",
        "no": "a22",
        "size": "게시물 내용",
        "color_id": "white",
        "link": "www.asd"
      }],
      "reply": [{
        "username": "댓글작성자",
        "reply_content": "댓글내용",
        "reply_time": "2016-01-01"
      }]
    },
      {
        "post_id": 2222,
        "username" : "작성자",
        "photo_url": "./public/photos/user/profile.jpg",
        "file_url": "./public/photos/interior/europe.jpg",
        "scrap_count": 22,
        "hash_tag": ["의자", "침대"],
        "category": "북유럽",
        "post_count": 50,
        "furnitures": [{
          "furniture_url": "./public/photos/furniture/chair.jpg",
          "brand": "IKEA",
          "name": "한샘",
          "no": "a22",
          "size": "게시물 내용",
          "color_id": "white",
          "link": "www.asd"
        }],
        "reply": [{
          "username": "댓글작성자",
          "reply_content": "댓글내용",
          "reply_time": "2016-01-01"
        }]
      }]

  }

  res.json({
    "result": {
      "message": "게시물 목록이 조회되었습니다",
      "page": 1,
      "listperPage": 6,
      "postData": {"postList": result}
    }
  });
})

module.exports = router;