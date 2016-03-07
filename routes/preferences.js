var express = require('express');

var router = express.Router();

// 취향조사
router.get('/', function (req, res, next) {
    res.json({
        "result": {
            "message": "취향조사 내용이 전달되었습니다..",
            "preferData": [
                {
                    "questionary_id": 1,
                    "questionary": "당신의 연령대는?",
                    "item_seq": 1,
                    "item": "20"
                },
                {
                    "questionary_id": 1,
                    "questionary": "당신의 연령대는?",
                    "item_seq": 2,
                    "item": "30"
                },
                {
                    "questionary_id": 1,
                    "questionary": "당신의 연령대는?",
                    "item_seq": 3,
                    "item": "40"
                },
                {
                    "questionary_id": 1,
                    "questionary": "당신의 연령대는?",
                    "item_seq": 4,
                    "item": "50"
                },
                {
                    "questionary_id": 2,
                    "questionary": "당신의 취향은?",
                    "item_seq": 1,
                    "item": "도시적이고 간결한 블랙&화이트"
                },
                {
                    "questionary_id": 2,
                    "questionary": "당신의 취향은?",
                    "item_seq": 2,
                    "item": "전원적이고 아기자기한 꽃내음"
                },
                {
                    "questionary_id": 2,
                    "questionary": "당신의 취향은?",
                    "item_seq": 3,
                    "item": "네츄럴한 우드스타일의 실용주의"
                },
                {
                    "questionary_id": 2,
                    "questionary": "당신의 취향은?",
                    "item_seq": 4,
                    "item": "아날로그감성의 빛바랜"
                }]
        }

    })
});

module.exports = router;