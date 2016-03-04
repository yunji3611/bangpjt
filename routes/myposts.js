var express = require('express');

var router = express.Router();

// 내가 올린 게시물 목록 조회
router.get('/', function (req, res, next) {

        res.json({
            "result": {
                "message": "내가쓴 글이 조회되었습니다...",
                "postData": {
                    "mypost_count": 20,
                    "page": 1,
                    "listPerPage": 2,
                    "list": [{"myposts_id": 1111,
                        "file_url": "12dsa",
                        "photo_url": "###",
                        "hashtag":"침대"},
                        {"post_id": 2,
                            "file_url": "12dsa",
                            "photo_url": "###",
                            "hashtag":"의자"}]
                }
            }
        });

});

module.exports = router;