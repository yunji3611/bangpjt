var express = require('express');

var router = express.Router();

// 스크랩함 목록 조회
router.get('/', function (req, res, next) {
    res.json({
        "result": {
            "message": "스크랩함 조회가 성공하였습니다...",
            "scrapData": {
                "myscrap_count": 20,
                "page": 1,
                "listPerPage": 2,
                "list": [{
                    "post_id": 1111,
                    "photo_url": "hong.jpg",
                    "file_url": "file.jpg",
                    "hash_tag": ["침대", "가구"]
                },
                    {
                        "post_id": 2222,
                        "photo_url": "hong.jpg",
                        "file_url": "file.jpg",
                        "hash_tag": ["침대", "가구"]
                    },
                    {
                        "post_id": 3333,
                        "photo_url": "hong.jpg",
                        "file_url": "file.jpg",
                        "hash_tag": ["침대", "가구"]
                    }]
            }
        }

    });

});

// 게시물 스크랩
router.post('/', function (req, res, next) {

    res.json({
        "result": {"message": "게시글 스크랩이 완료되었습니다"}
    })

});

module.exports = router;
