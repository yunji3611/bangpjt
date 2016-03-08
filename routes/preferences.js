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
                    "item": [{"seq": 1, "item": 20},
                            {"seq": 2, "item": 30},
                            {"seq": 3, "item": 40},
                            {"seq": 4, "item": 50}]
                },
                {
                    "questionary_id": 2,
                    "questionary": "당신의 취향은?",
                    "item": [{"seq": 1, "item": "도시적이고 간결한 블랙&화이트"},
                             {"seq": 2, "item": "전원적이고 아기자기한 꽃내음"},
                             {"seq": 3, "item": "아날로그감성의 빛바랜"},
                             {"seq": 4, "item": "아날로그감성의 빛바랜"}]
                },
                {
                    "questionary_id": 3,
                    "questionary": "당신이 인테리어 할 때 가장 중요시하는 소품은?",
                    "item": [{"seq": 1, "item": "조명"},
                            {"seq": 2, "item": "조명"},
                            {"seq": 3, "item": "탁자"},
                            {"seq": 4, "item": "커버류"}]
                }
            ]
        }

    })
});

module.exports = router;