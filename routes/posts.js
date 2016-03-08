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
        "hash_tag" : ["간이의자",  "책상", "화장대"],
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
//임대, 커뮤니티게시물 목록조회
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
        "hash_tag": ["간이의자", "화장대"],

      },

        {
          "post_id": 3,
          "username": "사용자2",
          "photo_url": "./public/photos/user/profile.jpg",
          "file_url": "./public/photos/interior/europe.jpg",
          "scrap_count": 22,
          "hash_tag": ["간이의자", "책상","화장대"]



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
        "hash_tag": ["의자", "침대",  "화장대"],
        "category": "모던"
      },
        {
          "post_id": 2222,
          "username": "방테리어",
          "photo_url": "./public/photos/user/profile.jpg",
          "file_url": "./public/photos/interior/europe.jpg",
          "scrap_count": 22,
          "hash_tag": ["의자", "침대"],
          "category": "북유럽"

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

//임대게시물 상세조회
router.get('/:post_id', function (req, res, next) {
    console.log(req.query.category);
    if (req.query.category === undefined) {
      var result = {
        "communityList": [{
          "post_id": 45,
          "username": "사용자1",
          "photo_url": "./public/photos/user/profile.jpg",
          "file_url": "./public/photos/interior/europe.jpg",
          "scrap_count": 22,
          "hash_tag": ["간이의자", "화장대"],
          "content" :"게시물내용",
          "reply": [{"username" :"댓글작성자", "reply_content": "댓글내용", "reply_time": "댓글작성시간"}]

        },

          {
            "post_id": 3,
            "username": "사용자2",
            "photo_url": "./public/photos/user/profile.jpg",
            "file_url": "./public/photos/interior/europe.jpg",
            "scrap_count": 22,
            "hash_tag": ["간이의자", "책상","화장대"],
            "content" :"게시물내용",
            "reply": [{"username" :"댓글작성자", "reply_content": "댓글내용", "reply_time": "댓글작성시간"}]


          }]
      }
    } else {
      var result = {
        "interiorList": [{
          "post_id": 1111,
          "file_url" : "./public/photos/interior/xxxxx.jpg(인테리어사진)",
          "scrap_count": 20,
          "category": "category명",
          "furnitures": [{ "furniture_url" : "./public/photos/furniture/xxxxx.jpg(소품사진)",
                           "brand": "IKEA", "name" : "의자", "no" : "ABC-000",
                           "size": "20*40", "color_id" :"white", "link" : "link" },
                         { "furniture_url" : "./public/photos/furniture/xxxxx.jpg(소품사진)",
                           "brand": "한샘", "name" : "침대", "no" : "BBC-002",
                           "size": "100*200", "color_id" :"black", "link" : "link" }],
          "reply": [{"username" :"댓글작성자", "reply_content": "댓글내용", "reply_time": "댓글작성시간"}]
    }  ,

          {
            "post_id": 1111,
            "file_url" : "./public/photos/interior/xxxxx.jpg(인테리어사진)",
            "scrap_count": 20,
            "category": "category명",
            "furnitures": [{ "furniture_url" : "./public/photos/furniture/xxxxx.jpg(소품사진)",
                             "brand": "IKEA", "name" : "의자", "no" : "ABC-000",
                              "size": "20*40", "color_id" :"white", "link" : "link" },
                           { "furniture_url" : "./public/photos/furniture/xxxxx.jpg(소품사진)",
                             "brand": "한샘", "name" : "침대", "no" : "BBC-002",
                             "size": "100*200", "color_id" :"black", "link" : "link" }],
            "reply": [{"username" :"댓글작성자", "reply_content": "댓글내용", "reply_time": "댓글작성시간"}]

          }]
      }
    }
    res.json({
      "result": {
        "message": "게시물 상세페이지입니다",
        "postData": result
      }
    });
  }
)



module.exports = router;
