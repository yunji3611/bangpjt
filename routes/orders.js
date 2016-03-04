var express = require('express');

var router = express.Router();

// 임대게시물 주문
router.post ('/', function (req, res, next) {
    if (req.secure) {
        res.json({
            "result":{"message":"임대되었습니다"}
        });
    } else {
        var err = new Error('SSL/TLS Upgrade Required');
        err.status = 426;
        next(err);
    }
});

module.exports = router;