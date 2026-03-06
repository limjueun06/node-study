const express = require('express')
const router = express.Router()

// 메인페이지
router.get('/', (req, res)=>{
    console.log('서버 접속')
    res.render('main')
})

module.exports = router