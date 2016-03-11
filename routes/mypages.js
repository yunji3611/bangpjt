var express = require('express');

var router = express.Router();

// 마이페이지 조회
router.get('/', function (req, res, next) {
    if (req.secure) {
        res.json({
            "result": {
                "message": "프로필이 조회되었습니다...",
                "mypageData": {
                    "name": "홍길동",
                    "photo_url": "https://bangpjt.s3.ap-northeast-2.amazonaws.com/mypages/upload_bd6fe497626e80589398e48065ead9ad.jpg",
                    "mypost_count": 5,
                    "myscrap_count": 6
                }
            }
        });
    } else {
        var err = new Error('SSL/TLS Upgrade Required');
        err.status = 426;
        next(err);
    }
});

// 마이페이지 프로필 사진 수정
router.put('/', function (req, res, next) {
    if (req.secure) {
        res.json({
            "result":{"message": "프로필 사진이 수정되었습니다"}
        })
    } else {
        var err = new Error('SSL/TLS Upgrade Required');
        err.status = 426;
        next(err);
    }
});

module.exports = router;