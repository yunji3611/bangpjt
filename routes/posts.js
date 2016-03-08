var express = require('express');
var router = express.Router();


router.post('/', function (req, res, next) {
  var result = {
    "result": {
      "message": "게시물이 등록되었습니다."
    }
  }
  res.json(result);

});


router.put('/', function (req, res, next) {
  var result = {
    "result": {
      "message": "게시물이 수정되었습니다.",
      "data": {
        "post_id": 33,
        "content": "게시물 내용",
        "hash_tag" : [{"tag1": "간이의자", "tag2": "책상", "tag3": "화장대"}],
        "file_url": "사진"
      }
    }
  }
  res.json(result);

});

router.delete('/', function (req, res, next) {
  var result = {
    "result": {
      "message": "게시물이 삭제되었습니다."
    }
  }
  res.json(result);

});


router.post('/:post_id/replies', function (req, res, next) {
  var result = {
    "result": {
      "message": "게시물의 댓글이 등록되었습니다."
    }
  }
  res.json(result);

});

router.delete('/:post_id/replies/:reply_id', function (req, res, next) {
  var result = {
    "result": {
      "message": "게시물의 댓글이 삭제되었습니다."
    }
  }
  res.json(result);

});

router.get('/', function (req, res, next) {
  console.log(req.query.category);
  if (req.query.category === undefined) {
    var result = {
      "communityList": [{
        "post_id": 45,
        "username": "사용자1",
        "photo_url": "./public/photos/user/profile.jpg",
        "file_url": "./public/photos/interior/europe.jpg",
        "scrap_count": 22,
        "hash_tag": [{"tag1": "간이의자", "tag2": "책상", "tag3": "화장대"}],
        "content": "게시물 내용",
        "reply": [{
          "username": "댓글작성자",
          "reply_content": "댓글내용",
          "reply_time": "2016-01-01"
        }]
      },

        {
          "post_id": 45,
          "username": "사용자1",
          "photo_url": "./public/photos/user/profile.jpg",
          "file_url": "./public/photos/interior/europe.jpg",
          "scrap_count": 22,
          "hash_tag": [{"tag1": "간이의자", "tag2": "책상", "tag3": "화장대"}],
          "content": "게시물 내용",
          "reply": [{
            "username": "댓글작성자",
            "reply_content": "댓글내용",
            "reply_time": "2016-01-01"
          }]

        }]
    }
  } else {
    var result = {
      "interiorList": [{
        "post_id": 1111,
        "username": "방테리어",
        "photo_url": "./public/photos/user/profile.jpg",
        "file_url": "./public/photos/interior/europe.jpg",
        "scrap_count": 22,
        "hash_tag": [{"tag1": "의자", "tag2": "침대", "tag3": "화장대"}],
        "category": "모던",
        "category_id": 1,
        "content": "게시물 내용",
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
          "username": "방테리어",
          "photo_url": "./public/photos/user/profile.jpg",
          "file_url": "./public/photos/interior/europe.jpg",
          "scrap_count": 22,
          "hash_tag": [{"tag1": "간이의자", "tag2": "책상", "tag3": "화장대"}],
          "category": "북유럽",
          "category_id": 2,
          "content": "게시물 내용",
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
  }
    res.json({
      "result": {
        "message": "게시물 목록이 조회되었습니다",
        "page": 1,
        "listperPage": 6,
        "postData": result
      }
    });
  }
  )


module.exports = router;
